Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderGood: {},
    value: '',
    show:false,
    goodsList: [
      {
        "id": "001",
        "name": "泰国龙眼500g*1盒【新人特惠】",
        "desc": "在你的眼里，有我才甜蜜",
        "price": "19",
        "num": "3",
        "type": "500g/盒",
        "pic_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560947626478&di=135d4458c99082c95f770c06eb37a943&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft2959%2F131%2F1760517754%2F322551%2F58530361%2F578dc733Nf53c6fc8.jpg%2521q70.jpg"
      },
      {
        "id": "002",
        "name": "伊利畅轻燕麦+草莓风味乳",
        "desc": "这杯酸奶太有料了，要嚼着吃",
        "price": "7",
        "num": "2",
        "type": "300ml/杯",
        "pic_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560947700643&di=9b5a8df1041dc2e3519bec725f63e7ce&imgtype=0&src=http%3A%2F%2Fpic1.womai.com%2Fupload%2F601%2F604%2F51700%2F84500%2F10481145%2F10481145_1_pic500_7848.jpg"
      },
      {
        "id": "003",
        "name": "进口香蕉每袋500g起",
        "desc": "跟鲜花一起运过来的香蕉",
        "price": "6",
        "num": "1",
        "type": "500g/袋",
        "pic_url": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1338648069,3007847363&fm=11&gp=0.jpg"
      },
      {
        "id": "004",
        "name": "新疆吐鲁番哈密瓜1个250g起",
        "desc": "咬一口吐鲁番风情的甜脆",
        "price": "19",
        "num": "3",
        "type": "250g/个",
        "pic_url": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2556288931,3686867963&fm=26&gp=0.jpg"
      },
      {
        "id": "005",
        "name": "8424西瓜大个儿，一个5斤起",
        "desc": "夏季清凉密码=8424",
        "price": "26",
        "num": "2",
        "type": "500g/个",
        "pic_url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3177330934,2805656105&fm=26&gp=0.jpg"
      },
      {
        "id": "006",
        "name": "新疆吐鲁番哈密瓜1个250g起",
        "desc": "咬一口吐鲁番风情的甜脆",
        "price": "19",
        "num": "1",
        "type": "250g/个",
        "pic_url": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2556288931,3686867963&fm=26&gp=0.jpg"
      },
      {
        "id": "007",
        "name": "8424西瓜大个儿，一个5斤起",
        "desc": "夏季清凉密码=8424",
        "price": "26",
        "num": "4",
        "type": "500g/个",
        "pic_url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3177330934,2805656105&fm=26&gp=0.jpg"
      },
      {
        "id": "008",
        "name": "新疆吐鲁番哈密瓜1个250g起",
        "desc": "咬一口吐鲁番风情的甜脆",
        "price": "19",
        "num": "2",
        "type": "250g/个",
        "pic_url": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2556288931,3686867963&fm=26&gp=0.jpg"
      },
      {
        "id": "009",
        "nam": "8424西瓜大个儿，一个5斤起",
        "desc": "夏季清凉密码=8424",
        "price": "26",
        "num": "1",
        "type": "500g/个",
        "pic_url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3177330934,2805656105&fm=26&gp=0.jpg"
      }
    ]
  },
  
  onLoad: function (options) {
    // console.log(options.id)
    var id = options.id
    var goodsData = this.data.goodsList
    var self = this
    goodsData.forEach(function(array){
      // console.log(array.id)
      if(array.id == id){
        self.setData({
          orderGood: array,
        })
      }
    })
  
    // console.log(this.data.orderGood)
  },

  onChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
  },
  
  pay: function (event) {
    // wx:wx.showToast({
    //   title: '支付已关闭',
    //   duration: 2000
    // })
    wx.showModal({
      title: '支付提示',
      content: '支付接口已关闭',
      showCancel: false
    })
  }
})