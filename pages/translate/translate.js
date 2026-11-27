var translator = require('../../utils/translator.js')
var dataModule = require('../../utils/data.js')
var storage = require('../../utils/storage.js')

var HISTORY_KEY = 'translate_history'

function decodeParam(value) {
  if (!value) return ''
  try {
    return decodeURIComponent(value)
  } catch (error) {
    console.error('翻译参数编码无效', error)
    return ''
  }
}

Page({
  data: {
    mode: 'toHuman',
    inputText: '',
    result: '',
    resultSegments: [],
    alternatives: [],
    noMatch: false,
    translating: false,
    history: [],
    inputFocus: false
  },

  onLoad: function(options) {
    options = options || {}
    this.loadHistory()
    var word = decodeParam(options.word)
    if (word) {
      this.setData({ inputText: word, mode: 'toHuman' })
      this.translate()
    }
  },

  onShow: function() {
    var app = getApp()
    var pending = app && app.globalData && app.globalData.pendingTranslate
    if (!pending) return
    app.globalData.pendingTranslate = null
    var mode = pending.mode === 'toJargon' ? 'toJargon' : 'toHuman'
    this.setData({
      inputText: String(pending.text || ''),
      mode: mode,
      result: '',
      resultSegments: [],
      alternatives: [],
      noMatch: false
    })
    if (this.data.inputText.trim()) this.translate()
  },

  switchMode: function(e) {
    this.setData({
      mode: e.currentTarget.dataset.mode,
      inputText: '',
      result: '',
      resultSegments: [],
      alternatives: [],
      noMatch: false
    })
  },

  onInput: function(e) {
    this.setData({ inputText: e.detail.value })
  },

  onInputFocus: function() {
    this.setData({ inputFocus: true })
  },

  onInputBlur: function() {
    this.setData({ inputFocus: false })
  },

  translate: function() {
    var input = this.data.inputText
    var mode = this.data.mode
    if (!input.trim()) {
      wx.showToast({ title: '请输入内容', icon: 'none' })
      return
    }

    var res = mode === 'toHuman'
      ? translator.translateToHuman(input)
      : translator.translateToJargon(input)
    var history = this.data.history.filter(function(item) {
      return item.original !== input || item.mode !== mode
    })
    var now = new Date()
    var time = ('0' + now.getHours()).slice(-2) + ':' + ('0' + now.getMinutes()).slice(-2)
    history.unshift({ original: input, translated: res.text, time: time, mode: mode })
    history = history.slice(0, 20)

    this.setData({
      result: res.text,
      resultSegments: res.segments,
      alternatives: res.alternatives,
      noMatch: res.matched === 0,
      translating: false
    })
    if (storage.writeArray(HISTORY_KEY, history)) {
      this.setData({ history: history })
    } else {
      wx.showToast({ title: '翻译完成，历史保存失败', icon: 'none' })
    }
    wx.vibrateShort({ type: 'light' })
  },

  selectAlternative: function(e) {
    var matchIndex = Number(e.currentTarget.dataset.matchIndex)
    var word = e.currentTarget.dataset.word
    var segments = this.data.resultSegments.map(function(segment) {
      return segment.matched && segment.matchIndex === matchIndex
        ? Object.assign({}, segment, { text: word })
        : segment
    })
    var result = segments.map(function(segment) { return segment.text }).join('')
    var history = this.data.history.map(function(item) {
      return item.original === this.data.inputText && item.mode === this.data.mode
        ? Object.assign({}, item, { translated: result })
        : item
    }, this)
    this.setData({ result: result, resultSegments: segments })
    if (storage.writeArray(HISTORY_KEY, history)) this.setData({ history: history })
  },

  copyResult: function() {
    wx.setClipboardData({
      data: this.data.result,
      success: function() {
        wx.showToast({ title: '复制成功', icon: 'success' })
      },
      fail: function() {
        wx.showToast({ title: '复制失败', icon: 'none' })
      }
    })
  },

  clearHistory: function() {
    var self = this
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有翻译历史吗？',
      success: function(res) {
        if (!res.confirm) return
        if (!storage.removeKey(HISTORY_KEY)) {
          wx.showToast({ title: '清空失败，请重试', icon: 'none' })
          return
        }
        self.setData({ history: [] })
        wx.showToast({ title: '已清空', icon: 'success' })
      }
    })
  },

  loadHistory: function() {
    this.setData({ history: storage.readHistory(HISTORY_KEY) })
  },

  onHistoryTap: function(e) {
    var original = e.currentTarget.dataset.original
    var mode = e.currentTarget.dataset.mode
    if (!original) return
    this.setData({
      inputText: original,
      mode: mode === 'toJargon' ? 'toJargon' : 'toHuman',
      result: '',
      resultSegments: [],
      alternatives: []
    })
  },

  onShareAppMessage: function() {
    var input = this.data.inputText
    var result = this.data.result
    var exact = dataModule.getAllWords().find(function(item) {
      return item.word === input
    })
    return {
      title: result
        ? input.slice(0, 12) + ' → ' + result.slice(0, 16)
        : '黑话人话一键互译｜互联网黑话翻译器',
      path: exact
        ? '/pages/wordDetail/wordDetail?id=' + exact.id
        : '/pages/index/index'
    }
  }
})
