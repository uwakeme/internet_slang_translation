var translator = require('../../utils/translator.js')

Page({
  data: {
    mode: 'toHuman',
    inputText: '',
    result: '',
    noMatch: false,
    translating: false,
    history: [],
    inputFocus: false
  },

  onLoad: function(options) {
    // 如果从其他页面传来了词汇，自动填入并翻译
    if (options.word) {
      var word = decodeURIComponent(options.word)
      this.setData({
        inputText: word,
        mode: 'toHuman'
      })
      this.translate()
    }

    // 加载历史记录
    this.loadHistory()
  },

  switchMode: function(e) {
    this.setData({
      mode: e.currentTarget.dataset.mode,
      inputText: '',
      result: '',
      noMatch: false
    })
  },

  onInput: function(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  onInputFocus: function() {
    this.setData({ inputFocus: true })
  },

  onInputBlur: function() {
    this.setData({ inputFocus: false })
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

    // 词典为本地数据，同步翻译即可
    var res = this.data.mode === 'toHuman'
      ? translator.translateToHuman(this.data.inputText)
      : translator.translateToJargon(this.data.inputText)

    // 添加到历史记录（同一原文+方向去重，只保留最新一条）
    var input = this.data.inputText
    var mode = this.data.mode
    var history = this.data.history.filter(function(item) {
      return item.original !== input || item.mode !== mode
    })
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var timeStr = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes)

    history.unshift({
      original: this.data.inputText,
      translated: res.text,
      time: timeStr,
      mode: this.data.mode
    })

    this.setData({
      result: res.text,
      noMatch: res.matched === 0,
      translating: false,
      history: history.slice(0, 20) // 只保留最近20条
    })

    // 保存历史记录
    this.saveHistory()

    // 触觉反馈
    wx.vibrateShort({ type: 'light' })
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
  },

  onHistoryTap: function(e) {
    var original = e.currentTarget.dataset.original;
    var mode = e.currentTarget.dataset.mode;
    if (original) {
      this.setData({
        inputText: original,
        mode: mode || 'toHuman',
        result: ''
      });
    }
  },

  onShareAppMessage: function() {
    var input = this.data.inputText || '互联网黑话';
    var result = this.data.result;
    var title = result
      ? input.slice(0, 12) + ' → ' + result.slice(0, 16)
      : '黑话人话一键互译｜互联网黑话翻译器';
    return {
      title: title,
      path: '/pages/index/index'
    };
  }
})
