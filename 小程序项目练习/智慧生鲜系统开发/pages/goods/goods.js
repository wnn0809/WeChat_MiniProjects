Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    goodslist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx:wx.request({
      url: 'https://www.easy-mock.com/mock/5d01eca83066922c5416c8ac/Ananfresh/goodsList',
      success: function (res) {
        console.log(res.data.data)
        self.setData({
          goodslist: res.data.data
        })
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('我已经到底了');
  },
  
  switchCur: function(e) {
    //console.log("switchCur:", e.target.dataset.index),
    this.setData({
      current: e.target.dataset.index
    }
      
    )
  },
  
})