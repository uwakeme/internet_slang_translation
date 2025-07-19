var dataModule = require('../../utils/data.js')

Page({
  data: {
    wordInfo: null,
    scenarios: []
  },

  onLoad: function(options) {
    console.log('词语详情页面接收参数:', options)
    var word = options.word
    if (word) {
      var decodedWord = decodeURIComponent(word)
      console.log('解码后的词语:', decodedWord)
      this.loadWordDetail(decodedWord)
    } else {
      console.error('没有接收到词语参数')
    }
  },

  loadWordDetail: function(word) {
    console.log('开始加载词语详情:', word)
    var allWords = dataModule.getAllWords()
    console.log('所有词语数量:', allWords.length)

    var wordInfo = allWords.find(function(item) {
      return item.word === word
    })

    if (wordInfo) {
      console.log('找到词语信息:', wordInfo)
      // 生成更多使用场景
      var scenarios = this.generateScenarios(wordInfo)

      this.setData({
        wordInfo: wordInfo,
        scenarios: scenarios
      })

      // 设置导航栏标题
      wx.setNavigationBarTitle({
        title: wordInfo.word
      })
    } else {
      console.error('未找到词语:', word)
      wx.showToast({
        title: '词语不存在',
        icon: 'none'
      })
    }
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
