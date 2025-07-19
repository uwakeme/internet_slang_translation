var translator = require('../../utils/translator.js')

Page({
  data: {
    inputText: '',
    result: ''
  },

  onInput: function(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  quickTranslate: function() {
    if (!this.data.inputText.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }

    var result = translator.translateText(this.data.inputText)
    this.setData({
      result: result
    })
  },

  copyResult: function() {
    var self = this
    wx.setClipboardData({
      data: self.data.result,
      success: function() {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        })
      }
    })
  },

  // 添加缺失的点击事件处理函数
  goToJargon: function() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  geToProfessional: function() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  goToCategory: function() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  // 添加专业翻译跳转函数
  goToTranslate: function() {
    wx.switchTab({
      url: '/pages/translate/translate'
    })
  },

  goToSearch: function() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})



