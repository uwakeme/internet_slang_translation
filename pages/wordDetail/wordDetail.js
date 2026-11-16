var dataModule = require('../../utils/data.js')
var scenariosData = require('./scenarios.js')

var FAVORITE_KEY = 'favorite_words'
var RELATED_MEANING_MAX_LEN = 20

function shortenMeaning(meaning) {
  return meaning.length > RELATED_MEANING_MAX_LEN
    ? meaning.substring(0, RELATED_MEANING_MAX_LEN) + '...'
    : meaning
}

Page({
  data: {
    wordInfo: null,
    scenarios: [],
    hasCustomScenario: false,
    categoryName: '',
    relatedWords: [],
    isFavorite: false
  },

  onLoad: function(options) {
    var wordInfo = null
    if (options.id !== undefined && options.id !== '') {
      wordInfo = dataModule.getWordById(options.id)
    } else if (options.word) {
      // 兼容旧入口：按词名查找
      var decoded = decodeURIComponent(options.word)
      wordInfo = dataModule.getAllWords().find(function(item) {
        return item.word === decoded
      }) || null
    }

    if (!wordInfo) {
      wx.showToast({
        title: '词语不存在',
        icon: 'none'
      })
      return
    }

    // 仅部分高频词有人工编写的场景（名单由 scenarios.js 统一维护）
    var scenarios = scenariosData.scenarioMap[wordInfo.word] || []

    var categories = dataModule.getCategories()
    var categoryInfo = categories.find(function(cat) {
      return cat.id === wordInfo.categoryId
    })

    this.setData({
      wordInfo: wordInfo,
      scenarios: scenarios,
      hasCustomScenario: scenarios.length > 0,
      categoryName: categoryInfo ? categoryInfo.name : '',
      relatedWords: dataModule.getRelatedWords(wordInfo.id).map(function(w) {
        return { id: w.id, word: w.word, meaning: shortenMeaning(w.meaning) }
      }),
      isFavorite: this.getFavorites().indexOf(wordInfo.id) !== -1
    })

    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: wordInfo.word
    })
  },

  getFavorites: function() {
    try {
      return wx.getStorageSync(FAVORITE_KEY) || []
    } catch (e) {
      return []
    }
  },

  toggleFavorite: function() {
    if (!this.data.wordInfo) return
    var wordId = this.data.wordInfo.id
    var favorites = this.getFavorites()
    var idx = favorites.indexOf(wordId)

    if (idx === -1) {
      favorites.push(wordId)
    } else {
      favorites.splice(idx, 1)
    }

    try {
      wx.setStorageSync(FAVORITE_KEY, favorites)
    } catch (e) {
      console.error('保存收藏失败', e)
      return
    }

    this.setData({ isFavorite: idx === -1 })
    wx.showToast({
      title: idx === -1 ? '已收藏' : '已取消收藏',
      icon: 'none'
    })
  },

  goToRelated: function(e) {
    var wordId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/wordDetail/wordDetail?id=' + wordId
    })
  },

  copyWord: function() {
    wx.setClipboardData({
      data: this.data.wordInfo.word,
      success: function() {
        wx.showToast({
          title: '已复制词汇',
          icon: 'success'
        })
      }
    })
  },

  onShareAppMessage: function() {
    var word = this.data.wordInfo
    return {
      title: word ? '「' + word.word + '」是什么意思？' : '互联网黑话翻译器',
      path: word ? '/pages/wordDetail/wordDetail?id=' + word.id : '/pages/index/index'
    }
  },

  onShareTimeline: function() {
    var word = this.data.wordInfo
    return word
      ? { title: '「' + word.word + '」是什么意思？', query: 'id=' + word.id }
      : { title: '互联网黑话翻译器' }
  }
})
