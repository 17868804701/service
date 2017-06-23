// pages/pingjia/pingjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [],
    star1:'★',
    star2: '★',
    star3: '★',
    star4: '★',
    star5: '★',
    str:'非常好',
    tab:['非常好','很好','不错','一般','很一般','普通'],
    content:''
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  // 相机评价
  click_1: function () {
    console.log("1星评价")
    if (this.data.star1 == "★") {
      this.setData({
        star5: '☆',
        star4: '☆',
        star3: '☆',
        star2: '☆',
        str:'非常差'
      })
    } else {
      this.setData({
        star1: '★',
        str: '非常差'
      })
    }
  },
  click_2: function () {
    console.log("2星评价")
    if (this.data.star2 == '★') {
      this.setData({
        star5: '☆',
        star4: '☆',
        star3: '☆',
        str:'差'

      })
    } else {
      this.setData({
        star1: '★',
        star2: '★',
        str: '差'
      })
    }
  },
  click_3: function () {
    console.log("3星评价")
    if (this.data.star3 == "★") {
      this.setData({
        star5: '☆',
        star4: '☆',
        str:'一般'
      })
    } else {
      this.setData({
        star1: '★',
        star2: '★',
        star3: '★',
        str: '一般'
      })
    }
  },
  click_4: function () {
    console.log("4星评价")
    if (this.data.star4 == '★') {
      this.setData({
        star5: '☆',
        str:'好'
      })
    } else {
      this.setData({
        star1: '★',
        star2: '★',
        star3: '★',
        star4: '★',
        str: '好'
      })
    }
  },
  click_5: function () {
    console.log("5星评价");
    this.setData({
      star1: '★',
      star2: '★',
      star3: '★',
      star4: '★',
      star5: '★',
      str:'非常好'
    })
  },
  tab:function(e){
    var item = e.currentTarget.dataset.item;
    this.setData({
      content:this.data.content+item+'、'
    })

  }
})