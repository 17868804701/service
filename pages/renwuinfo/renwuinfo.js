Page({
  data: {
    imgUrls: [
      {
        link: '/pages/index/index',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }, {
        link: '/pages/logs/logs',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
      }, {
        link: '/pages/test/test',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    tel:'178****4701'
  },
  onLoad: function () {
    console.log('onLoad test');
  },
  showTel:function(){
    var that =this; 
    wx.showModal({
      title: '查看',
      content: '你还没有下单付费，不能查看，立即下单',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            tel:'17868804701'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})  