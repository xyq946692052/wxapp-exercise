// pages/headline/headline.js
const date = new Date();
const years = [];
const months = [];
const days = [];

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i);
}

for (let i = 1; i <= 12; i++) {
  months.push(i);
}

for (let i = 1; i <= 31; i++) {
  days.push(i);
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: ["../../images/lunbo/1.jpg", "../../images/lunbo/2.jpg", "../../images/lunbo/3.jpg", "../../images/lunbo/4.jpg"],
    currentTab: 0,
    winWidth: 0,
    winHeight: 0,
    years: years,
    year: date.getFullYear(),
    month: 2,
    months: months,
    days: days,
    day: 2,
    year: date.getFullYear(),
    value: [9999, 1, 1],

    array: ['美国', '中国', '日本', '俄罗斯', '英国', '法国', '德国'],
    objectArray: [{
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '日本'
      },
      {
        id: 3,
        name: '俄罗斯'
      },
      {
        id: 5,
        name: '英国'
      },
      {
        id: 5,
        name: '法国'
      },
      {
        id: 6,
        name: '德国'
      }
    ],
    index: 0,
    time: '17:00',
    date: '2016-01-01',
  },
  bindPickerChange: function(e) {
    console.log(e.detail.value);
    this.setData({
      index: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },

  bindchange: function(e) {
    const val = e.detail.value;
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]]
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var page = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        page.setData({
          winWidth: res.windowWidth
        });
        page.setData({
          winHeight: res.windowHeight
        });
      }
    })
  },
  switchNav: function(e) {
    var page = this;
    if (this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      page.setData({
        currentTab: e.target.dataset.current
      });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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