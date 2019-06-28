Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems: [],
    checkedAll: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var self = this
    var cartItems = wx.getStorageSync("cartItems")
    self.setData({
      cartItems: cartItems
    })
    // console.log(cartItems)
  },

  add:function(event){
    // console.log(event)
    // 获取购物车中商品列表
    var cartItems = this.data.cartItems
    // 获取商品索引
    var index = event.target.dataset.index
    // 获取商品数量
    var count = cartItems[index].value
    // 点击时数量加1
    count++
    // 重新赋值
    cartItems[index].value = count
    this.setData({
      cartItems: cartItems
    })

    // 更新缓存
    wx.setStorageSync("cartItems", cartItems)
  },
  reduce:function(event){
    // 获取购物车中商品列表
    var cartItems = this.data.cartItems
    // 获取商品索引
    var index = event.target.dataset.index
    // 获取商品数量
    var count = cartItems[index].value
    // 商品数量大于1时点击时数量减1
    if (count==1){
      // 重新赋值
      cartItems[index].value = 1
    }else{
      count--
      // 重新赋值
      cartItems[index].value = count
    }
    
    
    this.setData({
      cartItems: cartItems
    })

    // 更新缓存
    wx.setStorageSync("cartItems", cartItems)
  },
  
})