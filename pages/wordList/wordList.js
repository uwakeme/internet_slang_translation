var dataModule = require('../../utils/data.js')
var storage = require('../../utils/storage.js')

var PAGE_SIZE = 20

Page({
  data: {
    categoryId: null,
    categoryName: '',
    categoryType: '',
    isFavorites: false,
    words: [],
    total: 0,
    hasMore: false
  },

  _allWords: [],
  _visibleCount: PAGE_SIZE,

  onLoad: function(options) {
    if (options.favorites) {
      // 我的收藏视图
      this.setData({ isFavorites: true, categoryName: '我的收藏' })
      wx.setNavigationBarTitle({ title: '我的收藏' })
      this.loadFavorites()
      return
    }

    var categoryId = parseInt(options.categoryId, 10)
    var category = dataModule.getCategories().find(function(cat) {
      return cat.id === categoryId
    })

    this.setData({
      categoryId: categoryId,
      categoryName: category ? category.name : '',
      categoryType: category ? category.type : ''
    })

    wx.setNavigationBarTitle({
      title: category ? category.name : ''
    })

    this.loadWords(categoryId)
  },

  setWords: function(words) {
    this._allWords = words
    this._visibleCount = PAGE_SIZE
    this.setData({
      words: words.slice(0, this._visibleCount),
      total: words.length,
      hasMore: words.length > this._visibleCount
    })
  },

  loadMore: function() {
    if (!this.data.hasMore) return
    this._visibleCount += PAGE_SIZE
    this.setData({
      words: this._allWords.slice(0, this._visibleCount),
      hasMore: this._allWords.length > this._visibleCount
    })
  },

  loadWords: function(categoryId) {
    this.setWords(dataModule.getWordsByCategory(categoryId))
  },

  loadFavorites: function() {
    var words = storage.getFavoriteIds().slice().reverse().map(function(id) {
      return dataModule.getWordById(id)
    }).filter(Boolean)
    this.setWords(words)
  },

  onShow: function() {
    // 从详情页返回时刷新收藏状态
    if (this.data.isFavorites) this.loadFavorites()
  },

  goToWordDetail: function(e) {
    var wordId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/wordDetail/wordDetail?id=' + wordId
    })
  },

  translateWord: function(e) {
    var app = getApp()
    app.globalData.pendingTranslate = { text: e.currentTarget.dataset.word, mode: 'toHuman' }
    wx.switchTab({ url: '/pages/translate/translate' })
  },

  onShareAppMessage: function() {
    return {
      title: (this.data.categoryName || '黑话词库') + '｜互联网黑话翻译器',
      path: '/pages/index/index'
    }
  }
})
