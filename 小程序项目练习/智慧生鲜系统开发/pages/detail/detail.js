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
  },

  addcart:function(e){
    // console.log(e)
    var cartItems = wx.getStorageSync("cartItems") || []
    // 判断购物车中此商品是否已经存在，存在时flag返回商品对象数据
    var flag = cartItems.find(function(array){
      return array.id === e.target.dataset.id
    })
    console.log(flag)
    // 存在时点击一次商品再加1
    if(flag){
      flag.value = parseInt(flag.value)+1
    }else{
      cartItems.push({
        id: e.target.dataset.id,
        title: e.target.dataset.title,
        image: e.target.dataset.image,
        price: e.target.dataset.price,
        value: 1,
        selected:true
      })
    }
    // console.log(cartItems)

    // 轻提示
    wx:wx.showToast({
      title: '成功加入购物车',
      duration: 1000
    })

    // 更新缓存数据
    try {
      wx.setStorageSync('cartItems', cartItems)
    } catch (e) {
      // console.log(e)
     }
  }
})