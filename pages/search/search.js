var dataModule = require('../../utils/data.js')

// 构建分类 ID → 名称映射
var categoryMap = {}
var categories = dataModule.getCategories()
for (var i = 0; i < categories.length; i++) {
  categoryMap[categories[i].id] = categories[i].name
}

// 将文本按关键词切分为高亮片段，用于结果页着色
function buildHighlightSegments(text, keyword) {
  var full = [{ text: text, highlight: false }]
  if (!keyword) return full

  var lowerText = String(text).toLowerCase()
  var lowerKey = String(keyword).toLowerCase()
  if (!lowerKey || lowerText.indexOf(lowerKey) === -1) return full

  var segments = []
  var idx = 0
  var pos = lowerText.indexOf(lowerKey)
  while (pos !== -1) {
    if (pos > idx) segments.push({ text: text.slice(idx, pos), highlight: false })
    segments.push({ text: text.slice(pos, pos + lowerKey.length), highlight: true })
    idx = pos + lowerKey.length
    pos = lowerText.indexOf(lowerKey, idx)
  }
  if (idx < text.length) segments.push({ text: text.slice(idx), highlight: false })
  return segments
}

function enrichResults(results, keyword) {
  return results.map(function(word) {
    return Object.assign({}, word, {
      categoryName: categoryMap[word.categoryId] || '未分类',
      wordSegs: buildHighlightSegments(word.word, keyword),
      meaningSegs: buildHighlightSegments(word.meaning, keyword)
    })
  })
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

  onShareAppMessage: function() {
    return {
      title: '互联网黑话翻译器｜搜黑话、查热梗',
      path: '/pages/index/index'
    }
  },

  onInput: function(e) {
    var keyword = e.detail.value
    this.setData({
      searchKeyword: keyword,
      showHistory: !keyword.trim()
    })

    // 输入过程只做防抖联想搜索，不写搜索历史，
    // 避免中间态关键词（如想搜"赋能"时输入的"赋"）污染历史
    if (keyword.trim()) {
      this.scheduleSearch(keyword)
    } else {
      if (this._searchTimer) {
        clearTimeout(this._searchTimer)
        this._searchTimer = null
      }
      this.setData({
        searchResults: [],
        searching: false
      })
    }
  },

  scheduleSearch: function(keyword) {
    // 清除前一个定时器，实现防抖
    if (this._searchTimer) {
      clearTimeout(this._searchTimer)
      this._searchTimer = null
    }

    this.setData({ searching: true })

    var self = this
    this._searchTimer = setTimeout(function() {
      self._searchTimer = null
      self.runSearch(keyword)
    }, 300)
  },

  runSearch: function(keyword) {
    var results = dataModule.searchWords(keyword)
    this.setData({
      searchResults: enrichResults(results, keyword),
      searching: false
    })
    return results
  },

  onSearch: function() {
    var keyword = this.data.searchKeyword
    if (!keyword.trim()) {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      })
      return
    }

    // 确认搜索：立即执行并写入历史
    if (this._searchTimer) {
      clearTimeout(this._searchTimer)
      this._searchTimer = null
    }
    var results = this.runSearch(keyword)
    if (results.length > 0) this.saveSearchHistory(keyword.trim())
  },

  searchByTag: function(e) {
    var tag = e.currentTarget.dataset.tag
    var results = dataModule.searchByTag(tag)

    this.setData({
      searchKeyword: tag,
      searchResults: enrichResults(results, tag),
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
    var results = this.runSearch(keyword)
    if (results.length > 0) this.saveSearchHistory(keyword)
  },

  goToWordDetail: function(e) {
    var wordId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/wordDetail/wordDetail?id=' + wordId
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
