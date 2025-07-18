const { getJargonCategories, getProfessionalCategories } = require('../../utils/data.js')

Page({
  data: {
    jargonCategories: [],
    professionalCategories: []
  },

  onLoad() {
    this.loadCategories()
  },

  loadCategories() {
    this.setData({
      jargonCategories: getJargonCategories(),
      professionalCategories: getProfessionalCategories()
    })
  },

  goToWordList(e) {
    const category = e.currentTarget.dataset.category
    wx.navigateTo({
      url: `/pages/wordList/wordList?categoryId=${category.id}&categoryName=${category.name}&categoryType=${category.type}`
    })
  }
})

