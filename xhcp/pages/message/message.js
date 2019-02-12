// pages/message/message.js
var types = ['default', 'primary', 'warn']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: ['red', 'orange', 'yellow', 'green', 'grey', 'blue', 'purple'],
    iconType: ['success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn', 'success_circle', 'scuuess_no_circle',
      'waiting_circle', 'circle', 'info_circle', 'cancel', 'search', 'clear'
    ],

    defaultSize: 'default',
    disabled: false,
    loading: false,
    plain: false,
    primarySize: 'default',
    warnSize: 'default'
  },
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  checkboxChange: function(e) {
    console.log(e.detail.value)
  },
  radioChange: function(e) {
    console.log(e.detail.value)
  }
})

for (var i = 0; i < types.length; i++) {
  (function(type) {
    pageObject[type] = function(e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] = this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}
Page(pageObject)