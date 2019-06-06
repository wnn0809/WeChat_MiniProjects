更多内容[点这里](https://blog.csdn.net/w1418899532/article/details/91042760)

小程序的绘图组件与html5里的canvas是类似的，而媒体类组件常用的有音频audio、相机camera、视频video等。下面就用例子说明每一个具体组件的用法和常用属性用法解析。

## 1.画布canvas
canvas可以用来绘制图形和动画，图形和动画的具体实现要借助API wx.createCanvasContext， wx.createCanvasContext返回一个canvas对象，它有很多的绘图方法，例如描边、设置描边宽度、画矩形、圆形等。

新建一个项目，pages目录下新建canvas目录。

在canvas.wxml中使用canvas组件，呈现出画布。如下：

```html
<!-- canvas.wxml -->
<!-- canvas-id:canvas 组件的唯一标识符，若指定了 type 则无需再指定该属性 -->
<canvas style="width: 100%; height: 350px;background:blue;" canvas-id="firstCanvas"></canvas>

```

需要注意的是，canvas标签默认宽度300px，高度150px，自己还可以指定宽度和高度。

在canvas.js中写绘图实现代码，实现步骤如下：

1.首先通过小程序API `wx.createCanvasContext('canvasID')`获取创建canvas的绘图上下文context对象。

2.通过context对象使用绘图方法。如先使用`context.setStrokeStyle("#FF83FA")`设置描边颜色，然后`setLineWidth()`设置描边宽度，接下来`rect()`方法绘制矩形。

3.将想要绘制的图形如何画描述完成以后，使用`draw()`方法绘制上下文中的描述，画到画布canvas中。

代码虽有30多行，但过半是注释。如：

```javascript
Page({
  onReady: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    // createCanvasContext:创建canvas的绘图上下文CanvasContext对象
    var context = wx.createCanvasContext('firstCanvas')

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
```

上面程序实现效果：

![canvas效果](https://img-blog.csdnimg.cn/20190606140731909.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)

上面实现了一个笑脸图形，也可以实现动画，使笑脸移动起来，需要在wxml中给canvas标签绑定bindtap事件。然后再js实现bindtap事件使用setInterval()定时器即可。

## 2.媒体类组件

1. audio

    audio是音频，在audio.wxml中使用audio组件，使用到的属性，如下;
    
    poster:默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置poster无效 。
    
    name:默认控件上的音频名字。
    
    author：默认控件上的作者名字。
    
    src：要播放音频的资源地址 。
    
    controls：是否显示默认控件，默认值false  。
    
    loop：是否循环播放,默认值false  。
    
    id：audio 组件的唯一标识符 。
    
    ```html
    <!-- media.wxml -->
    <!-- poster:默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效 -->
    <!-- name:默认控件上的音频名字 -->
    <!-- author：默认控件上的作者名字 -->
    <!-- src：要播放音频的资源地址 -->
    <!--controls：是否显示默认控件，默认值false  -->
    <!--loop：是否循环播放,默认值false  -->
    <!-- id：audio 组件的唯一标识符 -->
    <audio poster="{{poster}}" name="{{name}}" author="{{author}}" src="{{src}}" id="myAudio" controls="{{true}}" loop="{{true}}"></audio>
    
    <button type="primary" bindtap="audioPlay">播放</button>
    <button type="primary" bindtap="audioPause">暂停</button>
    <button type="primary" bindtap="audio14">设置当前播放时间为14秒</button>
    
    ```

    在audio.js中编写有关音频资源描述的代码和按钮的绑定事件代码：
    
    ```javascript
    Page({
      /**
       * 生命周期函数--监听页面初次渲染完成
       */
      onReady: function (e) {
        // 使用API wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = wx.createAudioContext('myAudio')
      },
      /**
       * 页面的初始数据
       */
      data: {
        // poster：默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        // 默认控件上的音频名字
        name: '如果没有你',
        // 默认控件上的作者名字
        author: '莫文蔚',
        // 音频资源地址
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      },
      // 绑定的事件
      audioPlay: function () {
        this.audioCtx.play()
      },
      audioPause: function () {
        this.audioCtx.pause()
      },
      audio14: function () {
        this.audioCtx.seek(14)
      },
      audioStart: function () {
        this.audioCtx.seek(0)
      }
    })
    ```
    
    实现的效果为：

    ![audio效果](https://img-blog.csdnimg.cn/20190606151104796.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)
    
2. camera

    camera，相机组件，使用时需要用户授权，即会询问用户是否同意打开相机，小程序例子也只能通过真机测试看到效果。

    在camera.wxml中使用camera组件，用到属性有：

    1、device-position:摄像头朝向，默认是back,还有前置front 
    
    2、flash：闪光灯，值为auto on off 
     
    3、binderror:用户不允许使用摄像头时触发 
    
    ```html
    <!-- camera.wxml -->
    <!--device-position:摄像头朝向，默认是back,还有前置front  -->
    <!-- flash：闪光灯，值为auto on off -->
    <!-- binderror:用户不允许使用摄像头时触发 -->
    <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
    <button type="primary" bindtap="takePhoto">拍照</button>
    <image mode="widthFix" src="{{src}}"></image>
    ```
    
    在camera.js中编写拍照按钮的绑定事件：

    
    
    ```javascript
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
    ```
    
    点击真机测试，效果为：
        ![camera](https://img-blog.csdnimg.cn/2019060615173941.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)

    点击允许使用摄像头后就可以拍照片。
    
3. video
    
    video是视频组件，常用的属性有：

    ![video常用属性](https://img-blog.csdnimg.cn/20190606152003890.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)
    在wxml中使用video组件，使用enable-danmu属性开启弹幕，danmu-btn属性显示弹幕按钮：
    
    ```html
    <!-- video.wxml -->
    <!-- src:要播放视频的资源地址 -->
    <!--danmu-list：弹幕列表  -->
    <!--enable-danmu：是否展示弹幕，只在初始化时有效，不能动态变更，默认false  -->
    <!-- danmu-btn：是否显示弹幕按钮，默认false -->
    <!-- controls：是否显示默认播放控件（播放/暂停按钮、播放进度、时间）默认true -->
    <!--  -->
    <video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" danmu-list="{{danmuList}}" enable-danmu danmu-btn controls></video>
    ```
    ![video.wxml](https://img-blog.csdnimg.cn/20190606152213127.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)
    
    在video.js中定义弹幕列表，不开启弹幕功能时就不用写。
    
    ```javascript
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
    ```
    
    动态图为：
    
    ![video](https://img-blog.csdnimg.cn/20190606152830916.gif)

更多详细的组件属性请参小程序开发文档组件相关部分。