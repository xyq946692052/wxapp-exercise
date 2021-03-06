// pages/video/video.js

function getRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? '0' + color : color;
    rgb.push(color);
  }
  return '#' + rgb.join('');
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'http://ali.cdn.kaiyanapp.com/ca41515acf967fc06249c1a16a16f466_1280x720_854x480.mp4?auth_key=1550455799-0-0-a72c441f4fb9d663548a76c0edbe1b6f',
    danmuList: [{
        text: '第1s出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第3s出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value;
  },
  bindButtonTap: function() {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  bindSendDanmu: function() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function(res) {
    this.videoContext = wx.createVideoContext('myVideo');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})