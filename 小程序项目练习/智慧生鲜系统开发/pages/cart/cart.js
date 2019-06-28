Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartItems: [],
    checkedAll: true,
    total: 0
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
    this.getsumtotal()
  },
  onLoad:function(){

  },
  // 总计价格
  getsumtotal : function(){
    // console.log(this.data.cartItems)
    var sum = 0
    for (var i = 0;i<this.data.cartItems.length;i++){
      if(this.data.cartItems[i].selected){
        sum += this.data.cartItems[i].value * this.data.cartItems[i].price
      }
    }
    this.setData({
      total:sum
    })
  },
  // 加
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
    this.getsumtotal()
    // 更新缓存
    wx.setStorageSync("cartItems", cartItems)
  },
  // 减
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
    this.getsumtotal()
    // 更新缓存
    wx.setStorageSync("cartItems", cartItems)
  },
  // 删除
  delete:function(event){
    var cartItems = this.data.cartItems
    var index = event.target.dataset.index
    // 删除当前下标的商品
    cartItems.splice(index,1)
    if (cartItems.length===0){
      wx:wx.showToast({
        title: '空了，去购物',
        duration: 2000
      })

    }
    // 更新数据
    this.setData({
      cartItems: cartItems
    })
    // 
    this.getsumtotal();
    // 更新缓存
    wx.setStorageSync("cartItems", cartItems)

  },
  // 是否全部选中
  allSelected:function(event){
    var checkedAll = this.data.checkedAll
    checkedAll = !checkedAll
    var cartItems = this.data.cartItems
    for(var i=0;i<cartItems.length;i++){
      cartItems[i].selected = checkedAll
    }
    this.setData({
      cartItems: cartItems,
      checkedAll: checkedAll
    })
    this.getsumtotal()
  },
  // 单选
  oneSelected:function(event){
    var cartItems = this.data.cartItems
    // console.log(event)
    var index = event.target.dataset.index
    var select = cartItems[index].selected
    cartItems[index].selected = !select
    this.setData({
      cartItems: cartItems
    })
    this.getsumtotal()
    // 更新缓存
    wx.setStorageSync("cartItems", cartItems)
  }
  
})