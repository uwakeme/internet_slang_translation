var dataModule = require('../../utils/data.js')
var storage = require('../../utils/storage.js')

var HISTORY_KEY = 'search_history'
var PAGE_SIZE = 20

var categoryMap = {}
dataModule.getCategories().forEach(function(category) {
  categoryMap[category.id] = category.name
})

function buildHighlightSegments(text, keyword) {
  var full = [{ text: text, highlight: false }]
  if (!keyword) return full
  var lowerText = String(text).toLowerCase()
  var lowerKey = String(keyword).toLowerCase()
  if (lowerText.indexOf(lowerKey) === -1) return full
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
    resultTotal: 0,
    hasMore: false,
    popularTags: [],
    searchHistory: [],
    showHistory: true,
    searching: false
  },

  _searchTimer: null,
  _searchGeneration: 0,
  _visibleCount: PAGE_SIZE,
  _allResults: [],

  onLoad: function() {
    this.loadPopularTags()
    this.loadSearchHistory()
  },

  onUnload: function() {
    this.cancelSearch()
  },

  onShareAppMessage: function() {
    return {
      title: '互联网黑话翻译器｜搜黑话、查热梗',
      path: '/pages/index/index'
    }
  },

  onInput: function(e) {
    var keyword = e.detail.value
    this.setData({ searchKeyword: keyword, showHistory: !keyword.trim() })
    if (keyword.trim()) this.scheduleSearch(keyword)
    else {
      this.cancelSearch()
      this._allResults = []
      this.setData({ searchResults: [], resultTotal: 0, hasMore: false })
    }
  },

  cancelSearch: function() {
    if (this._searchTimer) clearTimeout(this._searchTimer)
    this._searchTimer = null
    this._searchGeneration++
    this.setData({ searching: false })
  },

  scheduleSearch: function(keyword) {
    this.cancelSearch()
    var normalized = keyword.trim()
    var generation = this._searchGeneration
    this.setData({ searching: true })
    var self = this
    this._searchTimer = setTimeout(function() {
      self._searchTimer = null
      if (generation !== self._searchGeneration) return
      self.runSearch(normalized)
    }, 300)
  },

  runSearch: function(keyword) {
    var normalized = String(keyword || '').trim()
    var results = dataModule.searchWords(normalized)
    this._allResults = enrichResults(results, normalized)
    this._visibleCount = PAGE_SIZE
    this.setData({
      searchResults: this._allResults.slice(0, this._visibleCount),
      resultTotal: results.length,
      hasMore: results.length > this._visibleCount,
      searching: false
    })
    return results
  },

  loadMore: function() {
    if (!this.data.hasMore) return
    this._visibleCount += PAGE_SIZE
    this.setData({
      searchResults: this._allResults.slice(0, this._visibleCount),
      hasMore: this._allResults.length > this._visibleCount
    })
  },

  onSearch: function() {
    var keyword = this.data.searchKeyword.trim()
    if (!keyword) {
      wx.showToast({ title: '请输入搜索内容', icon: 'none' })
      return
    }
    this.cancelSearch()
    this.setData({ searchKeyword: keyword, showHistory: false })
    var results = this.runSearch(keyword)
    if (results.length > 0) this.saveSearchHistory(keyword)
  },

  searchByTag: function(e) {
    var tag = String(e.currentTarget.dataset.tag || '').trim()
    if (!tag) return
    this.cancelSearch()
    var results = dataModule.searchByTag(tag)
    this._allResults = enrichResults(results, tag)
    this._visibleCount = PAGE_SIZE
    this.setData({
      searchKeyword: tag,
      searchResults: this._allResults.slice(0, this._visibleCount),
      resultTotal: results.length,
      hasMore: results.length > this._visibleCount,
      showHistory: false
    })
    this.saveSearchHistory(tag)
  },

  searchFromHistory: function(e) {
    var keyword = String(e.currentTarget.dataset.keyword || '').trim()
    if (!keyword) return
    this.cancelSearch()
    this.setData({ searchKeyword: keyword, showHistory: false })
    var results = this.runSearch(keyword)
    if (results.length > 0) this.saveSearchHistory(keyword)
  },

  goToWordDetail: function(e) {
    wx.navigateTo({ url: '/pages/wordDetail/wordDetail?id=' + e.currentTarget.dataset.id })
  },

  goToTranslate: function(e) {
    var app = getApp()
    app.globalData.pendingTranslate = { text: e.currentTarget.dataset.word, mode: 'toHuman' }
    wx.switchTab({ url: '/pages/translate/translate' })
  },

  clearSearch: function() {
    this.cancelSearch()
    this._allResults = []
    this.setData({
      searchKeyword: '',
      searchResults: [],
      resultTotal: 0,
      hasMore: false,
      showHistory: true
    })
  },

  clearHistory: function() {
    var self = this
    wx.showModal({
      title: '确认清空',
      content: '确定要清空搜索历史吗？',
      success: function(res) {
        if (!res.confirm) return
        if (!storage.removeKey(HISTORY_KEY)) {
          wx.showToast({ title: '清空失败，请重试', icon: 'none' })
          return
        }
        self.setData({ searchHistory: [] })
        wx.showToast({ title: '已清空', icon: 'success' })
      }
    })
  },

  loadPopularTags: function() {
    this.setData({ popularTags: dataModule.getPopularTags().slice(0, 12) })
  },

  loadSearchHistory: function() {
    this.setData({ searchHistory: storage.readHistory(HISTORY_KEY) })
  },

  saveSearchHistory: function(keyword) {
    var history = this.data.searchHistory.filter(function(item) { return item !== keyword })
    history.unshift(keyword)
    history = history.slice(0, 10)
    if (storage.writeArray(HISTORY_KEY, history)) this.setData({ searchHistory: history })
  }
})
