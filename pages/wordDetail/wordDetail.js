var dataModule = require('../../utils/data.js')
var scenariosData = require('./scenarios.js')
var storage = require('../../utils/storage.js')
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
    isFavorite: false,
    loading: true,
    error: ''
  },

  onLoad: function(options) {
    options = options || {}
    this._loadOptions = options
    this.setData({ loading: true, error: '', wordInfo: null })
    var wordInfo = null
    if (options.id !== undefined && options.id !== '') {
      wordInfo = dataModule.getWordById(options.id)
    } else if (options.word) {
      var decoded = ''
      try {
        decoded = decodeURIComponent(options.word)
      } catch (error) {
        console.error('词条参数编码无效', error)
      }
      wordInfo = dataModule.getAllWords().find(function(item) {
        return item.word === decoded
      }) || null
    }

    if (!wordInfo) {
      this.setData({ loading: false, error: '词条不存在或链接已失效' })
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
      isFavorite: this.getFavorites().indexOf(wordInfo.id) !== -1,
      loading: false
    })

    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: wordInfo.word
    })
  },

  getFavorites: function() {
    return storage.getFavoriteIds()
  },

  retry: function() {
    this.onLoad(this._loadOptions || {})
  },

  goBack: function() {
    wx.navigateBack({ delta: 1 })
  },

  toggleFavorite: function() {
    if (!this.data.wordInfo) return
    var wordId = this.data.wordInfo.id
    var favorites = this.getFavorites()
    var idx = favorites.indexOf(wordId)

    if (idx === -1) favorites.push(wordId)
    else favorites.splice(idx, 1)

    if (!storage.saveFavoriteIds(favorites)) {
      wx.showToast({ title: '保存失败，请重试', icon: 'none' })
      return
    }

    this.setData({ isFavorite: idx === -1 })
    wx.showToast({ title: idx === -1 ? '已收藏' : '已取消收藏', icon: 'none' })
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
