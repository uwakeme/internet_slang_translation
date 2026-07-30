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

  goToWordList: function(e) {
    var category = e.currentTarget.dataset.category
    wx.navigateTo({
      url: '/pages/wordList/wordList?categoryId=' + category.id + '&categoryName=' + category.name + '&categoryType=' + category.type
    })
  }
})

