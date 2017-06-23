// pages/index/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    date: '1980-09-01',
    date1: '1980-09-01',
    time: '12:01',
    showTel:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sex = options.sex;
    var nickName = options.nickName
    var tip = options.tip;
  
    this.setData({
      tip: tip
    })
    if (sex == '男') {
      this.setData({
        checked: true
      })
    } else if (sex == '女') {
      this.setData({
        checked1: true
      })
    }
    this.setData({
      nickName: nickName
    })
    //根据生日算出年龄
    var bth = this.data.date1;
    console.log(bth);
    var str = bth.substring(0, 4);
    var birthday = parseInt(str);
    console.log(birthday);
    var date = new Date;
    var year = date.getFullYear();
    console.log(year);
    var age = parseInt(year) - birthday;
    this.setData({
      age: age
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '/page/user?id=123'
    }
  },
  my_info: function () {
    wx.navigateTo({
      url: '../my_info/my_info',
    })
  },
  uploadCard: function () {
    wx.navigateTo({
      url: '../uploadCard/uploadCard',
    })
  },
  add: function () {
    wx.showToast({
      title: '添加成功',
    })
  },
  baocun: function () {
    wx.showToast({
      title: '保存成功',
    })
    
    if(this.data.tip =='wycwsyr'){
      wx.switchTab({
        url: '../users/users',
      })
    }
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    this.setData({
      date1: e.detail.value
    })
    //根据生日算出年龄
    var bth = this.data.date1;
    console.log(bth);
    var str = bth.substring(0, 4);
    var birthday = parseInt(str);
    console.log(birthday);
    var date = new Date;
    var year = date.getFullYear();
    console.log(year);
    var age = parseInt(year) - birthday;
    this.setData({
      age: age
    })
  }
})