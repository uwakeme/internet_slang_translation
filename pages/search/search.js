const { searchWords, searchByTag, getPopularTags } = require('../../utils/data.js')

Page({
  data: {
    searchKeyword: '',
    searchResults: [],
    popularTags: [],
    searchHistory: [],
    showHistory: true,
    searching: false
  },

  onLoad() {
    this.loadPopularTags()
    this.loadSearchHistory()
  },

  onInput(e) {
    const keyword = e.detail.value
    this.setData({
      searchKeyword: keyword,
      showHistory: !keyword.trim()
    })
    
    // 实时搜索
    if (keyword.trim()) {
      this.performSearch(keyword)
    } else {
      this.setData({
        searchResults: []
      })
    }
  },

  performSearch(keyword) {
    this.setData({ searching: true })
    
    setTimeout(() => {
      const results = searchWords(keyword)
      this.setData({
        searchResults: results,
        searching: false
      })
      
      // 保存搜索历史
      if (keyword.trim() && results.length > 0) {
        this.saveSearchHistory(keyword.trim())
      }
    }, 300)
  },

  onSearch() {
    if (!this.data.searchKeyword.trim()) {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      })
      return
    }
    this.performSearch(this.data.searchKeyword)
  },

  searchByTag(e) {
    const tag = e.currentTarget.dataset.tag
    const results = searchByTag(tag)
    this.setData({
      searchKeyword: tag,
      searchResults: results,
      showHistory: false
    })
    this.saveSearchHistory(tag)
  },

  searchFromHistory(e) {
    const keyword = e.currentTarget.dataset.keyword
    this.setData({
      searchKeyword: keyword,
      showHistory: false
    })
    this.performSearch(keyword)
  },

  goToWordDetail(e) {
    const word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: `/pages/wordDetail/wordDetail?word=${encodeURIComponent(word)}`
    })
  },

  goToTranslate(e) {
    const word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: `/pages/translate/translate?word=${encodeURIComponent(word)}`
    })
  },

  clearSearch() {
    this.setData({
      searchKeyword: '',
      searchResults: [],
      showHistory: true
    })
  },

  clearHistory() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空搜索历史吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
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

  loadPopularTags() {
    const tags = getPopularTags()
    this.setData({
      popularTags: tags.slice(0, 12) // 只显示前12个热门标签
    })
  },

  loadSearchHistory() {
    try {
      const history = wx.getStorageSync('search_history') || []
      this.setData({
        searchHistory: history
      })
    } catch (e) {
      console.error('加载搜索历史失败', e)
    }
  },

  saveSearchHistory(keyword) {
    try {
      let history = wx.getStorageSync('search_history') || []
      
      // 移除重复项
      history = history.filter(item => item !== keyword)
      
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