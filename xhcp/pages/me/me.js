// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      focus: false
  },
  bindButtonTap:function(){
     this.setData({
       focus:true
     })
  },
  bindKeyInput: function(e){
    this.setData({
      inputValue:e.detail.value
    })
  },

  bindReplaceInput:function(e){
      var value = e.detail.value
      var pos = e.detail.cursor
      if(pos!=-1){
        var left = e.detail.value.slice(0,pos)
        pos = left.replace(/11/g, '2').length
      }
      return {
        value: value.replace(/11/g, '2'),
        cursor:pos
      }
  },
  bindHideKeyboard:function(e){
    if(e.detail.value==='123'){
      wx.hideKeyboard()
    }
  },

  clickBtn:function(){
      console.log("单击了按钮组件");
  },
  checkboxChange:function(){
    console.log("单击了多项选择器组件");
  },
  radioChange:function(){
      console.log("单击了单项选择器组件");
  },
})