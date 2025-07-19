var dataModule = require('../../utils/data.js')

Page({
  data: {
    categoryId: '',
    categoryName: '',
    categoryType: '',
    words: []
  },

  onLoad: function(options) {
    var categoryId = options.categoryId
    var categoryName = options.categoryName
    var categoryType = options.categoryType

    this.setData({
      categoryId: categoryId,
      categoryName: categoryName,
      categoryType: categoryType
    })

    wx.setNavigationBarTitle({
      title: categoryName
    })

    this.loadWords()
  },

  loadWords: function() {
    var words = dataModule.getWordsByCategory(parseInt(this.data.categoryId))
    this.setData({ words: words })
  },

  goToWordDetail: function(e) {
    var word = e.currentTarget.dataset.word
    console.log('点击词语:', word)
    var url = '/pages/wordDetail/wordDetail?word=' + encodeURIComponent(word)
    console.log('跳转URL:', url)

    wx.navigateTo({
      url: url,
      success: function() {
        console.log('跳转成功')
      },
      fail: function(err) {
        console.error('跳转失败:', err)
      }
    })
  },

  translateWord: function(e) {
    var word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: '/pages/translate/translate?word=' + encodeURIComponent(word)
    })
  }
})




