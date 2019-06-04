更多内容[点这里](https://blog.csdn.net/w1418899532/article/details/90809438)


<font color="red">**导航与地图组件的应用场景：**

在小程序需要由当前页面跳转到指定的页面时，就可以使用导航navigation组件，只需要设置指定页面的url地址即可。当需要实现定位、查找位置等一些LBS信息时，像滴滴打车这样的应用，就可以用地图map组件。

## <font color="red">1.导航navigation
navigation：页面的链接。

<font color="blue">它有很多的属性，最最常用的就是url，表示当前小程序内的跳转链接。navigation组件用法也很简单。

新建的quickstart项目，点击index首页的头像，会跳转到查看日志页面，这是通过给头像图片绑定bindtap事件实现的，把bindtap事件去掉，点击头像就不会跳转的。

我们使用导航navigation组件也可以实现页面的跳转。在index.wxml文件中使用navigation包裹住点击区域的代码即可。如下：

![navigation测试](https://img-blog.csdnimg.cn/20190604195009786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)

点击头像会跳转到查看日志页面，然后点击左上角返回键可返回首页。效果如下：

![navigation跳转效果](https://img-blog.csdnimg.cn/2019060419572717.gif)

<font color="blue">还可以指定页面的跳转方式，比如跳过去不让返回，可以设置navigation的open-type属性，使open-type="redirect"，redirect是关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。

另外navigation导航组件有很多的属性，常用的有：

![navigation常用属性](https://img-blog.csdnimg.cn/20190604195849296.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)
其他更多属性请参考开发文档。[导航组件](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

## <font color="red">2.地图map组件
map：地图。

map.wxml文件中代码：

![map使用](https://img-blog.csdnimg.cn/20190604203805182.png)

map.js中代码：

```javascript
Page({
  data: {
    //markers： 标记点用于在地图上显示标记的位置
    markers: [{
      iconPath: "../img/ta.jpg",
      id: 0,
      latitude: 31.23,
      longitude: 121.45,
      width: 30,
      height: 30,
      title:'上海站'
    }],
    // polyline：指定一系列坐标点，从数组第一项连线至最后一项
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})
```

效果：

![map效果](https://img-blog.csdnimg.cn/20190604204215812.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)

map组件的常用属性：

![map常用属性](https://img-blog.csdnimg.cn/20190604204301425.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)
![map常用属性2](https://img-blog.csdnimg.cn/20190604204334735.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)

更多属性和用法参考开发文档[地图组件](https://developers.weixin.qq.com/miniprogram/dev/component/map.html)

