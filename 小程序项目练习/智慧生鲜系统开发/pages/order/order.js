Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: ''
  },
  onChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
  },
  fromsubmit: function (e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }
})