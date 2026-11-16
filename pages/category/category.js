var dataModule = require('../../utils/data.js')

Page({
  data: {
    jargonCategories: [],
    professionalCategories: []
  },

  onLoad: function() {
    this.loadCategories()
  },

  loadCategories: function() {
    var jargonCats = dataModule.getJargonCategories()
    var professionalCats = dataModule.getProfessionalCategories()
    this.setData({
      jargonCategories: jargonCats,
      professionalCategories: professionalCats
    })
  },

  goToFavorites: function() {
    wx.navigateTo({
      url: '/pages/wordList/wordList?favorites=1'
    })
  },

  goToWordList: function(e) {
    var categoryId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/wordList/wordList?categoryId=' + categoryId
    })
  },

  onShareAppMessage: function() {
    return {
      title: '互联网黑话词库｜15大分类一次看懂',
      path: '/pages/index/index'
    }
  }
})
