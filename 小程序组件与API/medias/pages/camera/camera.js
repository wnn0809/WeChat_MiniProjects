Page({
  // takePhoto:拍照按钮绑定的事件
  takePhoto() {
    // wx.createCameraContext:创建 camera 上下文 CameraContext 对象
    const ctx = wx.createCameraContext()
    // CameraContext.takePhoto(Object object):拍摄照片
    ctx.takePhoto({
      // quality:成像质量,默认normal
      quality: 'high',
      //success: 接口调用成功的回调函数
      success: (res) => {
        this.setData({
          //success的参数tempImagePath: 照片文件的临时路径，安卓是jpg图片格式，ios是png
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})