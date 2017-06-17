


Page({
  data: {
    selected: true,
    selected1: false,
    hidden: false,
    show: 'none'
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected3: false,
      selected2: true
    })
  },
  selected3: function (e) {
    this.setData({
      selected2: false,
      selected1: false,
      selected: false,
      selected3: true
    })
  },
  index: function () {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  baocun: function () {
    wx.showToast({
      title: '保存成功',
    })
  },
  show_edit: function () {
    this.setData({
      show: ''
    })
  },
  hidden_edit: function () {
    this.setData({
      show: 'none'
    })
  },
  edit: function () {
    this.setData({
      show: 'none'
    })
    wx.navigateTo({
      url: '../edit/edit',
    })
  },
  add:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  },
  del:function(){
    var that = this;
    wx.showModal({
      title: '删除',
      content: '确定要删除吗？',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '删除成功',
          })
          that.setData({
            show: 'none'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  mySelf:function(){
    wx.navigateTo({
      url: '../my_info/my_info',
    })
  }
})

