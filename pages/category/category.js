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
    this.setData({
      jargonCategories: dataModule.getJargonCategories(),
      professionalCategories: dataModule.getProfessionalCategories()
    })
  },

  goToWordList: function(e) {
    var category = e.currentTarget.dataset.category
    wx.navigateTo({
      url: '/pages/wordList/wordList?categoryId=' + category.id + '&categoryName=' + category.name + '&categoryType=' + category.type
    })
  }
})

