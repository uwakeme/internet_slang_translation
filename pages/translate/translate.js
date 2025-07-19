var translator = require('../../utils/translator.js')

Page({
  data: {
    mode: 'toHuman',
    inputText: '',
    result: '',
    translating: false,
    history: []
  },

  onLoad: function(options) {
    console.log('翻译页面接收参数:', options) // 调试日志

    // 如果从分类页面传来了词汇，自动填入
    if (options.word) {
      var word = decodeURIComponent(options.word)
      this.setData({
        inputText: word,
        mode: 'toHuman'
      })
      // 自动翻译
      var self = this
      setTimeout(function() {
        self.translate()
      }, 500)
    }

    // 加载历史记录
    this.loadHistory()
  },

  switchMode: function(e) {
    this.setData({
      mode: e.currentTarget.dataset.mode,
      inputText: '',
      result: ''
    })
  },

  onInput: function(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  translate: function() {
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
    var self = this
    setTimeout(function() {
      var result
      if (self.data.mode === 'toHuman') {
        result = translator.translateToHuman(self.data.inputText)
      } else {
        result = translator.translateToJargon(self.data.inputText)
      }

      // 添加到历史记录
      var history = self.data.history
      var now = new Date()
      var minutes = now.getMinutes()
      var timeStr = now.getHours() + ':' + (minutes < 10 ? '0' + minutes : minutes)

      history.unshift({
        original: self.data.inputText,
        translated: result,
        time: timeStr,
        mode: self.data.mode
      })

      self.setData({
        result: result,
        translating: false,
        history: history.slice(0, 20) // 只保留最近20条
      })

      // 保存历史记录
      self.saveHistory()
    }, 800)
  },

  copyResult: function() {
    wx.setClipboardData({
      data: this.data.result,
      success: function() {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        })
      }
    })
  },

  clearHistory: function() {
    var self = this
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有翻译历史吗？',
      success: function(res) {
        if (res.confirm) {
          self.setData({
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

  loadHistory: function() {
    try {
      var history = wx.getStorageSync('translate_history') || []
      this.setData({
        history: history
      })
    } catch (e) {
      console.error('加载历史记录失败', e)
    }
  },

  saveHistory: function() {
    try {
      wx.setStorageSync('translate_history', this.data.history)
    } catch (e) {
      console.error('保存历史记录失败', e)
    }
  }
})
