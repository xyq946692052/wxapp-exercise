// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  canvasIdErrorCallback:function(e){
    console.log(e.detail.errMsg);
  },
  onReady:function(e){
    var context = wx.createContext();
    context.setStrokeStyle('#00ff00')
    context.setLineWidth(5)
    context.rect(0,0,200,200)
    context.stroke()
    context.setStrokeStyle('#ff0000')
    context.setLineWidth(2)
    context.moveTo(160,100)
    context.arc(100,100,60,0,2*Math.PI,true)
    context.moveTo(140,100)
    context.arc(100,100,40,0,2*Math.PI, true)
    context.moveTo(85, 80)
    context.arc(80,80,5,0,2*Math.PI,true)
    context.moveTo(125,80)
    context.arc(120,80,0,2*Math.PI,true)
    context.stroke()
    wx.drawCanvas({
       canvasId:'firstCanvas',
       actions:context.getActions()
    })
    
  }
  
})