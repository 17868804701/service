Page({
  data: {
    array: ['请选择职业', '中国', '巴西', '日本'],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  ok:function(){
    wx.showToast({
      title: '添加成功',
    })
  }
})