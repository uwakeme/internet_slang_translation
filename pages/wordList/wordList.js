var dataModule = require('../../utils/data.js')

Page({
  data: {
    categoryId: null,
    categoryName: '',
    categoryType: '',
    words: []
  },

  onLoad: function(options) {
    var categoryId = parseInt(options.categoryId, 10)
    var categoryName = options.categoryName || ''

    this.setData({
      categoryId: categoryId,
      categoryName: categoryName,
      categoryType: options.categoryType || ''
    })

    wx.setNavigationBarTitle({
      title: categoryName
    })

    this.loadWords(categoryId)
  },

  loadWords: function(categoryId) {
    var words = dataModule.getWordsByCategory(categoryId)
    this.setData({ words: words })
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
  }
})
