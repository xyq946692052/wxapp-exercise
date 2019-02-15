//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  navigateBtn: function() {
    wx.navigateTo({
      url: '../navigator/navigator',
      success: function(res) {
        console.log(res);
      },
      fail: function() {
        //fail
      },
      complete: function() {
        //complete
      },
    })
  },
  redirectBtn: function() {
    wx.redirectTo({
      url: '../navigator/navigator',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  switchBtn:function(){
    wx.switchTab({
      url: '../redirect/redirect',
      success: function(res){
        console.log(res);
      },
      fail:function(){
        //fail
      },
      complete:function(){
        //complete
      }
    })
  },
  toMediaBtn:function(){
    wx.navigateTo({
      url: '../media/media',
    })
  }

})