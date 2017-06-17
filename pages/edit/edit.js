Page({
  data: {
    array: ['德国', '中国', '巴西', '日本'],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  ok:function(){
    var that = this;
    wx.showModal({
      title: '修改信息',
      content: '确定要修改吗？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '修改成功',
          })
          wx.navigateBack({
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})