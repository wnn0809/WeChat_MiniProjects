import Notify from '../../miniprogram_npm/vant-weapp/notify/notify';

// 初始化
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    content: '',//评价的内容
    score: 5,//默认的评价分数
    images: [],//上传的图片
    fileIds: [],
    movieId: 0,
  },
  onContentChange:function(event){
    this.setData({
      content: event.detail
    })
  },
  onScoreChange: function (event){
    this.setData({
      score: event.detail
    })
  },
  uploadImg :function(){
    // 上传图片
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success:res => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        this.setData({
          images: this.data.images.concat(tempFilePaths)
        })
      }
    })
  },
  submit: function () {
    console.log(this.data.content)
    if (this.data.content===''){
      Notify('请输入评价内容');
    }else{
      wx.showLoading({
        title: '评价中',
      })
      // 1，上传图片到云存储.2,等云存储返回对应的fileID
      let promiseArr = [];
      // 循环遍历每张图片
      for (let i = 0; i < this.data.images.length; i++) {
        promiseArr.push(new Promise((resolve, reject) => {
          let item = this.data.images[i];
          // 图片后缀
          //使用正则表达式返回文件的拓展名
          let suffix = /\.\w+$/.exec(item)[0];
          wx.cloud.uploadFile({
            cloudPath: new Date().getTime() + suffix, // 上传至云端的路径
            filePath: item, // 小程序临时文件路径
            success: res => {
              // 返回文件 ID
              console.log(res.fileID)
              this.setData({
                fileIds: this.data.fileIds.concat(res.fileID)
              })
              resolve();
            },
            fail: console.error
          })
        }))
      }
      // 3.将fileID存到对应的云数据库
      // 等promiseArr数组中每一个promise任务完成后再去执行then里的代码
      Promise.all(promiseArr).then(res => {
        // 插入数据
        const comment = db.collection('comment').add({
          data: {
            content: this.data.content,
            score: this.data.score,
            movieid: this.data.movieId,
            fileIds: this.data.fileIds
          }
        }).then(res => {
          wx.hideLoading();
          wx.navigateTo({
            url: `../commentnext/commentnext?movieid=${this.data.movieId}`,
          })
        }).catch(err => {
          wx.hideLoading();
          wx.showToast({
            title: '评价失败',
          })
          this.setData({
            flag: false
          })
        })
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movieid = options.movieid.trim()
    this.setData({
      movieId: movieid
    })
    // console.log(movieid)
    wx.cloud.callFunction({
      name: 'getdetail',
      data: {
        movieid: movieid
      }
    }).then(res=>{
      // console.log(res);
      this.setData({
        detail: JSON.parse(res.result)
      })
    }).catch(err=>{
      console.error(err);
    })
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
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})