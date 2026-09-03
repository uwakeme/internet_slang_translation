var dataModule = require('../../utils/data.js')

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
    // 根据不同词汇生成具体的使用场景
    var scenarioMap = {
      '赋能': [
        { 
          scene: '会议讨论', 
          type: 'dialogue',
          content: [
            { speaker: '产品经理', text: '我们要赋能销售团队，提升他们的专业能力' },
            { speaker: '翻译', text: '我们要帮助销售团队，提升他们的专业能力' }
          ]
        },
        { 
          scene: '项目汇报', 
          type: 'paragraph',
          content: {
            original: '通过技术赋能，让业务流程更高效，实现数字化转型的目标。我们需要赋能各个部门，让他们具备更强的执行力。',
            translation: '通过技术支持，让业务流程更高效，实现数字化转型的目标。我们需要帮助各个部门，让他们具备更强的执行力。'
          }
        }
      ],
      '闭环': [
        { 
          scene: '产品规划', 
          type: 'dialogue',
          content: [
            { speaker: '产品总监', text: '我们需要形成完整的用户体验闭环' },
            { speaker: '翻译', text: '我们需要形成完整的用户体验流程' }
          ]
        },
        { 
          scene: '业务讨论', 
          type: 'paragraph',
          content: {
            original: '从获客到转化要形成闭环，确保每个环节都能有效衔接。只有建立了完整的业务闭环，才能实现可持续增长。',
            translation: '从获客到转化要形成完整流程，确保每个环节都能有效衔接。只有建立了完整的业务流程，才能实现可持续增长。'
          }
        }
      ],
      '颗粒度': [
        { 
          scene: '需求分析', 
          type: 'dialogue',
          content: [
            { speaker: '项目经理', text: '这个需求的颗粒度还不够细，需要进一步拆解' },
            { speaker: '翻译', text: '这个需求还不够详细具体，需要进一步拆解' }
          ]
        },
        { 
          scene: '任务分配', 
          type: 'paragraph',
          content: {
            original: '我们要把任务颗粒度做得更小，这样便于跟踪进度和质量把控。颗粒度越细，执行起来越清晰。',
            translation: '我们要把任务分解得更细致，这样便于跟踪进度和质量把控。分解得越细，执行起来越清晰。'
          }
        }
      ],
      '沉淀': [
        { 
          scene: '项目总结', 
          type: 'dialogue',
          content: [
            { speaker: '技术负责人', text: '这次项目要好好沉淀一下经验和方法论' },
            { speaker: '翻译', text: '这次项目要好好总结一下经验和方法论' }
          ]
        }
      ],
      '对齐': [
        { 
          scene: '团队会议', 
          type: 'dialogue',
          content: [
            { speaker: '团队Leader', text: '大家先对齐一下项目目标和时间节点' },
            { speaker: '翻译', text: '大家先统一一下项目目标和时间节点' }
          ]
        }
      ]
    }
    
    return scenarioMap[wordInfo.word] || [
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
