var dataModule = require('../../utils/data.js')

var SECTION_COLORS = ['#f5a623', '#ff6b6b', '#4ecdc4', '#a78bfa']
var SELECTED_CATEGORY_IDS = [1, 2, 8, 6]
var HOT_WORDS_LIMIT = 8
var WORDS_PER_CATEGORY = 3
var MEANING_MAX_LEN = 20

function shortenMeaning(meaning) {
  return meaning.length > MEANING_MAX_LEN
    ? meaning.substring(0, MEANING_MAX_LEN) + '...'
    : meaning
}

function buildHotWords() {
  // 今日热词从「网络热词」分类按日期轮换（见 utils/data.js getTodayHotWords）
  return dataModule.getTodayHotWords().slice(0, HOT_WORDS_LIMIT).map(function (w) {
    return { id: w.id, word: w.word, meaning: shortenMeaning(w.meaning) }
  })
}

function buildCategorySections(categories) {
  var sections = []
  for (var i = 0; i < SELECTED_CATEGORY_IDS.length; i++) {
    var catId = SELECTED_CATEGORY_IDS[i]
    var cat = null
    for (var j = 0; j < categories.length; j++) {
      if (categories[j].id === catId) { cat = categories[j]; break }
    }
    if (!cat) continue

    var words = dataModule.getWordsByCategory(catId)
      .slice(0, WORDS_PER_CATEGORY)
      .map(function (w) {
        return { id: w.id, word: w.word, meaning: shortenMeaning(w.meaning) }
      })

    sections.push({
      id: cat.id,
      name: cat.name,
      iconType: cat.iconType,
      icon: cat.icon,
      color: SECTION_COLORS[i],
      words: words
    })
  }
  return sections
}

Page({
  data: {
    hotWords: [],
    categorySections: []
  },

  onLoad: function () {
    try {
      var hotWords = buildHotWords()
      var sections = buildCategorySections(dataModule.getCategories())
      // 合并 setData，减少一次渲染通知
      this.setData({ hotWords: hotWords, categorySections: sections })
    } catch (err) {
      console.error('[index onLoad] failed:', err)
      wx.showToast({ title: '首页加载失败,请重试', icon: 'none' })
    }
  },

  onShareAppMessage: function () {
    return {
      title: '互联网黑话翻译器｜黑话人话一键互译',
      path: '/pages/index/index'
    }
  },

  onShareTimeline: function () {
    return { title: '互联网黑话翻译器｜黑话人话一键互译' }
  },

  goToSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  goToWordDetail: function (e) {
    var wordId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/wordDetail/wordDetail?id=' + wordId
    })
  },

  goToCategory: function (e) {
    var categoryId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/wordList/wordList?categoryId=' + categoryId
    })
  }
})
