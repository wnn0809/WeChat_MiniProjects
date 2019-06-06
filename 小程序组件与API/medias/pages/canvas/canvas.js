Page({
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    // createCanvasContext:创建canvas的绘图上下文CanvasContext对象
    var context = wx.createCanvasContext('firstCanvas')

    // CanvasContext.setStrokeStyle(Color color)：设置描边颜色
    context.setStrokeStyle("#FF83FA")

    // CanvasContext.setLineWidth(number lineWidth)：设置描边的宽度
    context.setLineWidth(8)

    // CanvasContext.rect(number x, number y, number width, number height)
    // 创建一个矩形路径。需要用 fill 或者 stroke 方法将矩形真正的画到 canvas 中
    context.rect(0, 0, 200, 200)//在圆心(0,0)处绘制长200宽200的矩形

    // CanvasContext.stroke()：画出当前路径的边框。默认颜色色为黑色
    context.stroke()

    // 设置描边颜色
    context.setStrokeStyle("#ff0000")

    //设置线条的宽度
    context.setLineWidth(2)

    // CanvasContext.moveTo(number x, number y)：
    // 把路径移动到画布中的指定点，不创建线条。用 stroke 方法来画线条
    context.moveTo(160, 100)

    // arc：创建一条弧线。
    //创建一个圆可以指定起始弧度为 0，终止弧度为 2 * Math.PI。
   // 用 stroke 或者 fill 方法来在 canvas 中画弧线
  
    //按规定的起始和终止弧度，在圆心(100,100)绘制半径是60的圆弧，最后一个参数表示弧度方向是否是逆时针
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    // 将上面的描述画边框
    context.stroke()

    // CanvasContext.draw(boolean reserve, function callback)：
    // 将之前在绘图上下文中的描述（路径、变形、样式等）画到 canvas 中
    context.draw()
  }
})