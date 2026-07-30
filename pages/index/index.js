var dataModule = require('../../utils/data.js')

Page({
  data: {
    hotWords: [],
    categorySections: []
  },

  onLoad: function () {
    this.loadHotWords()
    this.loadCategorySections()
  },

  loadHotWords: function () {
    var allWords = dataModule.getAllWords()
    // 取前 8 个词汇作为今日热词
    var hotWords = allWords.slice(0, 8).map(function (w) {
      var shortMeaning = w.meaning.length > 20 ? w.meaning.substring(0, 20) + '...' : w.meaning
      return {
        id: w.id,
        word: w.word,
        meaning: shortMeaning
      }
    })
    this.setData({ hotWords: hotWords })
  },

  loadCategorySections: function () {
    var categories = dataModule.getCategories()
    // 选取 4 个分类：会议用语、项目管理、产品运营、AI人工智能
    var selectedIds = [1, 2, 8, 6]
    var sections = []
    var colors = ['#f5a623', '#ff6b6b', '#4ecdc4', '#a78bfa']

    for (var i = 0; i < selectedIds.length; i++) {
      var catId = selectedIds[i]
      var cat = null
      for (var j = 0; j < categories.length; j++) {
        if (categories[j].id === catId) {
          cat = categories[j]
          break
        }
      }
      if (!cat) continue

      var words = dataModule.getWordsByCategory(catId).slice(0, 3).map(function (w) {
        var shortMeaning = w.meaning.length > 20 ? w.meaning.substring(0, 20) + '...' : w.meaning
        return {
          id: w.id,
          word: w.word,
          meaning: shortMeaning
        }
      })

      sections.push({
        id: cat.id,
        name: cat.name,
        iconType: cat.iconType,
        icon: cat.icon,
        color: colors[i],
        words: words
      })
    }

    this.setData({ categorySections: sections })
  },

  goToSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  goToWordDetail: function (e) {
    var word = e.currentTarget.dataset.word
    wx.navigateTo({
      url: '/pages/wordDetail/wordDetail?word=' + encodeURIComponent(word)
    })
  },

  goToCategory: function (e) {
    var categoryId = e.currentTarget.dataset.id
    var categoryName = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '/pages/wordList/wordList?categoryId=' + categoryId + '&categoryName=' + encodeURIComponent(categoryName)
    })
  }
})
