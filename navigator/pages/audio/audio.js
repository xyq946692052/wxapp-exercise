// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
 
  data: {
    poster: '../../images/cyx.png',
    name: '单车',
    author: '陈奕迅',
    src: 'http://dl.stream.qqmusic.qq.com/M500004CU50m2JjBjr.mp3?vkey=A3B9AD16288559B83437DBD8E9DA13FE8773B7CE5EA4C0F22BDEC1CB5C0B0ADDD63EADF99D654A5B3A0F15C6B03FD8363AF38787038622FD&guid=5150825362&fromtag=1',
  },

  audioPlay: function() {
    this.audioCtx.play();
  },
  audioPause: function() {
    this.audioCtx.pause();
  },
  audio14: function() {
    this.audioCtx.seek(14);
  },
  audioStart: function() {
    this.audioCtx.seek(0);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '音频',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.audioCtx = wx.createAudioContext('myAudio');
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