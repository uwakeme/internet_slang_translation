const { translateToHuman, translateToJargon } = require('../../utils/translator.js')

Page({
  data: {
    mode: 'toHuman',
    inputText: '',
    result: '',
    translating: false,
    history: []
  },

  onLoad(options) {
    console.log('翻译页面接收参数:', options) // 调试日志
    
    // 如果从分类页面传来了词汇，自动填入
    if (options.word) {
      const word = decodeURIComponent(options.word)
      this.setData({
        inputText: word,
        mode: 'toHuman'
      })
      // 自动翻译
      setTimeout(() => {
        this.translate()
      }, 500)
    }
    
    // 加载历史记录
    this.loadHistory()
  },

  switchMode(e) {
    this.setData({
      mode: e.currentTarget.dataset.mode,
      inputText: '',
      result: ''
    })
  },

  onInput(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  translate() {
    if (!this.data.inputText.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }

    this.setData({
      translating: true
    })

    // 模拟翻译延迟
    setTimeout(() => {
      let result
      if (this.data.mode === 'toHuman') {
        result = translateToHuman(this.data.inputText)
      } else {
        result = translateToJargon(this.data.inputText)
      }

      // 添加到历史记录
      const history = this.data.history
      const now = new Date()
      const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
      
      history.unshift({
        original: this.data.inputText,
        translated: result,
        time: timeStr,
        mode: this.data.mode
      })

      this.setData({
        result: result,
        translating: false,
        history: history.slice(0, 20) // 只保留最近20条
      })

      // 保存历史记录
      this.saveHistory()
    }, 800)
  },

  copyResult() {
    wx.setClipboardData({
      data: this.data.result,
      success: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        })
      }
    })
  },

  clearHistory() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有翻译历史吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            history: []
          })
          wx.removeStorageSync('translate_history')
          wx.showToast({
            title: '已清空',
            icon: 'success'
          })
        }
      }
    })
  },

  loadHistory() {
    try {
      const history = wx.getStorageSync('translate_history') || []
      this.setData({
        history: history
      })
    } catch (e) {
      console.error('加载历史记录失败', e)
    }
  },

  saveHistory() {
    try {
      wx.setStorageSync('translate_history', this.data.history)
    } catch (e) {
      console.error('保存历史记录失败', e)
    }
  }
})
