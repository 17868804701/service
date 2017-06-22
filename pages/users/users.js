
Page({
  data: {
    selected: true,
    selected1: false,
    hidden: false,
    show: 'none',
    zan_url:'../img/xihuanshi.png',
    zan_num:'109'
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
      url: '../index/index?sex='+this.data.gender+'&nickName='+this.data.nickName,
    })
  },
  share:function(){
    wx.navigateTo({
      url: '../share/share',
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
  add: function () {
    wx.navigateTo({
      url: '../add/add',
    })
  },
  del: function () {
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
  my_info: function () {
    wx.navigateTo({
      url: '../my_info/my_info',
    })
  },
  onLoad: function () {
    this.setData({
      zan_num: parseInt(this.data.zan_num)+1
    })
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.getUserInfo({
            success: function (res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country

              if (gender == 1) {
                gender = '男'
              } else if (gender == 2) {
                gender = '女'
              } else {
                gender = '未知'
              }
              console.log(gender)
              that.setData({
                nickName: nickName,
                avatarUrl: avatarUrl,
                gender: gender,
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },
  uploadCard:function(){
    wx.navigateTo({
      url: '../uploadCard/uploadCard',
    })
  }
})
