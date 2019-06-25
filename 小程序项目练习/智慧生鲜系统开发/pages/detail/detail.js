Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailGood: {},
    detailsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    var id = options.id
    wx: wx.request({
      url: 'https://www.easy-mock.com/mock/5d01eca83066922c5416c8ac/Ananfresh/goodsList',
      success: function (res) {
        // console.log(res.data.data)
        self.setData({
          detailsList: res.data.data
        })
        var detailData = self.data.detailsList
        // console.log(detailData)
        detailData.forEach(function (array) {
          // console.log(array.id)
          if (array.id == id) {
            self.setData({
              detailGood: array
            })
          }
        })
      }
    })
    // console.log(this.data.detailsList)
  },

  onReady: function () {
    
  },

  // vant商品导航组件绑定函数
  onClickIcon() {
    console.log('点击图标');
  },
  onClickButton() {
    console.log('点击按钮');
  }
})