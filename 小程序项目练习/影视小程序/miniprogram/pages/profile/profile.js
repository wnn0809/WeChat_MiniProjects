Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfolist: {},
    flag: true
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  login: function () {
    var self = this
    // console.log(canIUse)
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              self.setData({
                userinfolist: res.userInfo
              })
            }
          })
        }
      }
    })
    this.setData({
      flag: false
    })
  }
})