Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: '',
    // 弹幕列表，设置弹幕的出现时间，弹幕内容和字体颜色
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '第 4s 出现的弹幕',
        color: '#ff00ff',
        time: 4
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 5
      }]
  },
})