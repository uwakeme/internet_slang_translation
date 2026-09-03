var dataModule = require('../../utils/data.js')
var scenariosData = require('./scenarios.js')

Page({
  data: {
    wordInfo: null,
    scenarios: [],
    hasCustomScenario: false,
    categoryName: ''
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

    var scenarios = this.generateScenarios(wordInfo)

    // 判断是否有自定义场景
    var customWords = ['赋能', '闭环', '颗粒度', '沉淀', '对齐']
    var hasCustomScenario = customWords.indexOf(wordInfo.word) !== -1

    var categories = dataModule.getCategories()
    var categoryInfo = categories.find(function(cat) {
      return cat.id === wordInfo.categoryId
    })

    this.setData({
      wordInfo: wordInfo,
      scenarios: scenarios,
      hasCustomScenario: hasCustomScenario,
      categoryName: categoryInfo ? categoryInfo.name : ''
    })

    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: wordInfo.word
    })
  },

  generateScenarios: function(wordInfo) {
    return scenariosData.scenarioMap[wordInfo.word] || [
      {
        scene: '日常工作',
        type: 'paragraph',
        content: {
          original: '在工作中经常会用到"' + wordInfo.word + '"这个词',
          translation: '实际意思是"' + wordInfo.meaning + '"'
        }
      }
    ]
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
  }
})
