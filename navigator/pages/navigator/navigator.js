// pages/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad:function(options){
    console.log("title="+options);
    wx.setNavigationBarTitle({
      title: '新页面',
    });
    //wx.showNavigationBarLoading(); //加载动画
  },
  backBtn:function(){
    wx.navigateBack({
      delta: 1
    })
  }

})