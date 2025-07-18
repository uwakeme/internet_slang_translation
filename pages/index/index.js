const { translateText } = require('../../utils/translator.js')

Page({
  data: {
    inputText: '',
    result: ''
  },

  onInput(e) {
    this.setData({
      inputText: e.detail.value
    })
  },

  quickTranslate() {
    if (!this.data.inputText.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }

    const result = translateText(this.data.inputText)
    this.setData({
      result: result
    })
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

  // 添加缺失的点击事件处理函数
  goToJargon() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  geToProfessional() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  goToCategory() {
    wx.switchTab({
      url: '/pages/category/category'
    })
  },

  // 添加专业翻译跳转函数
  goToTranslate() {
    wx.switchTab({
      url: '/pages/translate/translate'
    })
  },

  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  }
})



