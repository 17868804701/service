// 引入wemark
var wemark = require('../../wemark/wemark');
// 需要渲染的Markdown文本
var md =`
#### 你
> 哈哈哈
`
;


Page({
  data: {
    // 确定一个数据名称
    wemark: {}
  },
  onReady: function () {
    wemark.parse(md, this, {
      imageWidth: wx.getSystemInfoSync().windowWidth - 40,
      name: 'wemark'
    })
  }
});