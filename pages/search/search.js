var dataModule = require('../../utils/data.js')

// 构建分类 ID → 名称映射
var categoryMap = {}
var categories = dataModule.getCategories()
for (var i = 0; i < categories.length; i++) {
  categoryMap[categories[i].id] = categories[i].name
}

Page({
  data: {
    searchKeyword: '',
    searchResults: [],
    popularTags: [],
    searchHistory: [],
    showHistory: true,
    searching: false
  },

  _searchTimer: null,

  onLoad: function() {
    this.loadPopularTags()
    this.loadSearchHistory()
  },

  onInput: function(e) {
    var keyword = e.detail.value
    this.setData({
      searchKeyword: keyword,
      showHistory: !keyword.trim()
    })

    // 实时搜索（防抖）
    if (keyword.trim()) {
      this.performSearch(keyword)
    } else {
      this.setData({
        searchResults: []
      })
    }
  },

  performSearch: function(keyword) {
    // 清除前一个定时器，实现防抖
    if (this._searchTimer) {
      clearTimeout(this._searchTimer)
      this._searchTimer = null
    }

    this.setData({ searching: true })

    var self = this
    this._searchTimer = setTimeout(function() {
      var results = dataModule.searchWords(keyword)

      // 给每个结果附加分类名称
      var enriched = results.map(function(word) {
        return Object.assign({}, word, {
          categoryName: categoryMap[word.categoryId] || '未分类'
        })
      })

      self.setData({
        searchResults: enriched,
        searching: false
      })

      // 保存搜索历史
      if (keyword.trim() && results.length > 0) {
        self.saveSearchHistory(keyword.trim())
      }
    }, 300)
  },

  onSearch: function() {
    if (!this.data.searchKeyword.trim()) {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      })
      return
    }
    this.performSearch(this.data.searchKeyword)
  },

  searchByTag: function(e) {
    var tag = e.currentTarget.dataset.tag
    var results = dataModule.searchByTag(tag)

    // 给每个结果附加分类名称
    var enriched = results.map(function(word) {
      return Object.assign({}, word, {
        categoryName: categoryMap[word.categoryId] || '未分类'
      })
    })

    this.setData({
      searchKeyword: tag,
      searchResults: enriched,
      showHistory: false
    })
    this.saveSearchHistory(tag)
  },

  searchFromHistory: function(e) {
    var keyword = e.currentTarget.dataset.keyword
    this.setData({
      searchKeyword: keyword,
      showHistory: false
    })
    this.performSearch(keyword)
  },

  goToWordDetail: function(e) {
    var word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: '/pages/wordDetail/wordDetail?word=' + encodeURIComponent(word)
    })
  },

  goToTranslate: function(e) {
    var word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: '/pages/translate/translate?word=' + encodeURIComponent(word)
    })
  },

  clearSearch: function() {
    this.setData({
      searchKeyword: '',
      searchResults: [],
      showHistory: true
    })
  },

  clearHistory: function() {
    var self = this
    wx.showModal({
      title: '确认清空',
      content: '确定要清空搜索历史吗？',
      success: function(res) {
        if (res.confirm) {
          self.setData({
            searchHistory: []
          })
          wx.removeStorageSync('search_history')
          wx.showToast({
            title: '已清空',
            icon: 'success'
          })
        }
      }
    })
  },

  loadPopularTags: function() {
    var tags = dataModule.getPopularTags()
    this.setData({
      popularTags: tags.slice(0, 12)
    })
  },

  loadSearchHistory: function() {
    try {
      var history = wx.getStorageSync('search_history') || []
      this.setData({
        searchHistory: history
      })
    } catch (e) {
      console.error('加载搜索历史失败', e)
    }
  },

  saveSearchHistory: function(keyword) {
    try {
      var history = wx.getStorageSync('search_history') || []

      // 移除重复项
      history = history.filter(function(item) {
        return item !== keyword
      })

      // 添加到开头
      history.unshift(keyword)

      // 只保留最近10条
      history = history.slice(0, 10)

      this.setData({
        searchHistory: history
      })

      wx.setStorageSync('search_history', history)
    } catch (e) {
      console.error('保存搜索历史失败', e)
    }
  }
})
