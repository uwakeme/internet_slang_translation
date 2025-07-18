const { getWordsByCategory } = require('../../utils/data.js')

Page({
  data: {
    categoryId: '',
    categoryName: '',
    categoryType: '',
    words: []
  },

  onLoad(options) {
    const { categoryId, categoryName, categoryType } = options
    this.setData({
      categoryId,
      categoryName,
      categoryType
    })
    
    wx.setNavigationBarTitle({
      title: categoryName
    })
    
    this.loadWords()
  },

  loadWords() {
    const words = getWordsByCategory(parseInt(this.data.categoryId))
    this.setData({ words })
  },

  translateWord(e) {
    const word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: `/pages/translate/translate?word=${encodeURIComponent(word)}`
    })
  }
})




