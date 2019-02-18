// pages/media/media.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.setNavigationBarTitle({
       title: '媒体',
     })
  },

  toAudio:function(){
    wx.navigateTo({
      url: '../audio/audio',
    })
  },
  toImage:function(){
    wx.navigateTo({
      url: '../image/image',
    })
  },
  toVedio:function(){
    wx.navigateTo({
      url: '../video/video',
    })
  },
  toMap:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  toCanvas:function(){
    wx.navigateTo({
      url: '../canvas/canvas',
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

  }
})