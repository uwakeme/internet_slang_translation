var dataModule = require('../../utils/data.js')

var FAVORITE_KEY = 'favorite_words'

Page({
  data: {
    categoryId: null,
    categoryName: '',
    categoryType: '',
    isFavorites: false,
    words: []
  },

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

  loadWords: function(categoryId) {
    var words = dataModule.getWordsByCategory(categoryId)
    this.setData({ words: words })
  },

  loadFavorites: function() {
    var favorites = []
    try {
      favorites = wx.getStorageSync(FAVORITE_KEY) || []
    } catch (e) {
      console.error('加载收藏失败', e)
    }

    // 按收藏顺序倒序展示（最近收藏在前），已失效的词条自动过滤
    var words = []
    for (var i = favorites.length - 1; i >= 0; i--) {
      var word = dataModule.getWordById(favorites[i])
      if (word) words.push(word)
    }
    this.setData({ words: words })
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
    var word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: '/pages/translate/translate?word=' + encodeURIComponent(word)
    })
  },

  onShareAppMessage: function() {
    return {
      title: (this.data.categoryName || '黑话词库') + '｜互联网黑话翻译器',
      path: '/pages/index/index'
    }
  }
})
