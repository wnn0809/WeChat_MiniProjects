
文章首先更新与[博客](https://blog.csdn.net/w1418899532/article/details/90727010)

## 1.scroll-view
ScrollView是可滚动的视图区域，直接使用ScrollView组件即可实现滚动效果。如下：

在wxml中使用scroll-view组件，组件里面用几个view视图显示。也可以放置文字或图片等内容。

```html
<!-- demo.wxml -->
<scroll-view>
 <view id="green" class='scroll-view-item bc-green'></view>
 <view id="red" class='scroll-view-item bc-red'></view>
 <view id="blue" class='scroll-view-item bc-blue'></view>
 <view id="yellow" class='scroll-view-item bc-yellow'></view>
</scroll-view>
```

在wxss中设置样式。

```css
/* demo.wxss */
.scroll-view-item {
  height: 200px;
}
.bc-green {
  background-color: green;
}
.bc-red {
  background-color: red;
}
.bc-blue {
  background-color: blue;
}
.bc-yellow {
  background-color: yellow;
}
```

因为这里页面没有交互事件爱你，所以对应的js文件中Page内容为空。

```javascript
Page({
  data: {
    
  },
})
```

这就可以实现页面滚动效果了，如下：

![ScrollView滚动效果](https://img-blog.csdnimg.cn/20190601110704992.gif)

## 2.scroll-view属性
scroll-view组件使用竖向滚动时，需要给`<scroll-view/>`一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px。

1. scroll-y：允许纵向滚动，默认值false。
 
    scroll-x：允许横向滚动属性，默认值false，使用方法与纵向滚动scroll-y相同。
    
    在上面的例子wxml中为scroll-view设置scroll-y属性，在wxss中设置滚动区域高度，即不需要再整屏滚动。如下;
    

    ```html
    <scroll-view scroll-y="true">
    ```

    ```css
    scroll-view {
      /* 设置不换行 */
      white-space: nowrap;
      /* 设置滚动区域高度 */
      height: 200px;
    }
    ```
    
    上面就实现了在高度200px的区域上下滚动。

    ![纵向滚动效果](https://img-blog.csdnimg.cn/20190601111854392.gif)
2. bindscrolltoupper ：滚动到顶部/左边时触发。
    bindscrolltolower： 滚动到底部/右边时触发。
    bindscroll ： 滚动时触发。
    
    上面三个都是scroll-view滚动时的事件处理属性，用法相同。
    
    在wxml中给scroll-view绑定滚动触发的事件scroll、向上滚动触发的事件upper和向下滚动触发的事件lower。如下：
    

    ```html
    <!-- demo.wxml -->
    <scroll-view scroll-y="true" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll">
      <!-- ... -->
    </scroll-view>
    ```
    
    在js中给绑定的事件写事件处理函数，如下：
    

    ```javascript
    Page({
      data: {
        
      },
      // 为scroll-view绑定的事件upper实现，传入event事件参数
      // 向上滚动时会触发此事件
      upper: function (event) {
        console.log("我滚动到顶部了");
        console.log(event);
      },
      // 为scroll-view绑定的事件lower实现，传入默认的event事件对象
      // 向上滚动时会触发此事件
      lower: function (event) {
        console.log("我滚动到底部了");
        console.log(event);
      },
      scroll: function(event){
        console.log("滚动ing");
      }
    })
    ```
    
    滚动时效果如下：注意控制台的输出信息，有利于帮助理解。

    ![滚动事件效果](https://img-blog.csdnimg.cn/20190601143204532.gif)
    控制输出的event对象，可以看出滚动的方向：

    ![event](https://img-blog.csdnimg.cn/20190601143556799.png)
3. 其他属性

    scroll-view还有很多其他的属性，如下：

    ![scroll-view属性](https://img-blog.csdnimg.cn/20190601143759531.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)
[详情参考](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)

使用滚动组件有几点需要注意：

1.不能在 scroll-view 中使用 textarea、map、canvas、video 组件。

2.scroll-into-view 的优先级高于 scroll-top。

3.在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh。

4.若要使用下拉刷新，请使用页面的滚动，而不是 scroll-view ，这样也能通过点击顶部状态栏回到页面顶部。

## 3.swiper
开发文档中定义swiper是滑块视图容器，其中只可放置`<swiper-item/>`组件（理解为滑动项），否则会导致未定义的行为。

其实可以理解为轮播图组件，直接可以拿来制作轮播图。

在wxml中使用swiper组件，swiper标签里面只可以放置`<swiper-item/>`组件，需要轮播几张页面就写几个`<swiper-item/>`标签，`<swiper-item/>`标签中可以放置其他标签或者组件，

小程序swiper组件默认显示第一个`<swiper-item/>`滑动项，默认也不是自动切换的，所以需要设置autoplay属性为true，实现自动切换。

如下：

```html
<!-- swiper.wxml -->
<!-- autoplay设置是否自动切换，默认false -->
<swiper autoplay="true" >
  <!-- swiper中只可以放`<swiper-item/>组件 -->
  <swiper-item><view class='item bc-green'>第一屏</view></swiper-item>
  <swiper-item><view class='item bc-red'>第二屏</view></swiper-item>
  <swiper-item><view class='item bc-blue'>第三屏</view></swiper-item>
  <swiper-item><view class='item bc-yellow'>第四屏</view></swiper-item>
</swiper>
```
在wxss中设置样式。当然，swiper-item中使用image组件时样式只需要设置图片样式即可。

```css
.item {
  /* 设置高度 */
  height: 200px;
  text-align: center;
  color: #fff;
  line-height: 100px;
}

.bc-green {
  background-color: green;
}
.bc-red {
  background-color: red;
}
.bc-blue {
  background-color: blue;
}
.bc-yellow {
  background-color: skyblue;
}
```

效果如下：

![swiper滑动效果图](https://img-blog.csdnimg.cn/20190601152809594.gif)

由上图可以看出没有设置滑动间隔时间，自动滑动的间隔大约是5s一次，自己是可以通过`interval`属性设置滑动间隔时长的，但由上图也可以看出，默认的滑动并不是无缝衔接的，滑动到最后一张时，是直接倒退回第一张，这个问题也可以通过`circular`属性设置。

另外轮播图的面板指示点和指示点颜色可以通过`indicator-dots`   和 `indicator-color`属性设置。
设置当前所在滑块的索引即默认第一屏显示第几张图是通过`current`属性设置的。

## 4.swiper属性
swiper有很多的属性，并且小程序官方也在不断的更新，功能会越来越完善。

这里举例：

`indicator-dots`:是否显示面板指示点   默认false
`indicator-color`：指示点颜色        默认rgba(0,0,0,3)
`current`：当前所在滑块的 index      默认0，设置1则显示第2张，设置2显示第3张
`interval`：自动切换时间间隔         默认5000
`duration`：滑动动画时长            默认500
`circular`：是否采用衔接滑动         默认false

wxml代码如下：

```html
<!-- swiper.wxml -->
<!-- autoplay设置是否自动切换，默认false -->
<swiper autoplay="true" indicator-dots='true' indicator-color='white' current='2' interval='2000' circular='true' duration='1000'>
  <!-- swiper中只可以放`<swiper-item/>组件 -->
  <swiper-item><view class='item bc-green'>第一屏</view></swiper-item>
  <swiper-item><view class='item bc-red'>第二屏</view></swiper-item>
  <swiper-item><view class='item bc-blue'>第三屏</view></swiper-item>
  <swiper-item><view class='item bc-yellow'>第四屏</view></swiper-item>
</swiper>

<!--
indicator-dots:是否显示面板指示点   默认false
indicator-color：指示点颜色        默认rgba(0,0,0,3)
current：当前所在滑块的 index      默认0，设置1则显示第2张，设置2显示第3张
interval：自动切换时间间隔         默认5000
duration：滑动动画时长            默认500
circular：是否采用衔接滑动         默认false

-->
```

效果如图：

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019060115491423.gif)

由上图可看到滑动间隔时间和动画时间都和设置的相同，面板指示点和指示点颜色也具备，因为current属性设置的值是2，所以开始运行显示的是第三那张图。现在也已经实现的无缝切换。

**bindchange事件：**

另外swiper还有常用的bindchange事件，当current属性 改变时即滑块索引变化时就会触发 change 事件，`event.detail = {current, source}`。

在wxml中swiper中 绑定change事件，如下：

```html
<!-- 设置bindchange="change" -->
<swiper autoplay="true" indicator-dots='true' indicator-color='white' current='2' interval='2000' circular='true' duration='1000' bindchange="change">
  <!-- swiper中只可以放`<swiper-item/>组件 -->
  <swiper-item><view class='item bc-green'>第一屏</view></swiper-item>
  <swiper-item><view class='item bc-red'>第二屏</view></swiper-item>
  <swiper-item><view class='item bc-blue'>第三屏</view></swiper-item>
  <swiper-item><view class='item bc-yellow'>第四屏</view></swiper-item>
</swiper>
```
在js中编写change事件实现：

```javascript
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  change: function(event){
    console.log('滑动啦');
    console.log(event);
  }
  
})
```

效果如下：

![绑定事件效果](https://img-blog.csdnimg.cn/20190601160704444.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3cxNDE4ODk5NTMy,size_16,color_FFFFFF,t_70)

swiper其他属性请参考小程序开发文档。


## 每天进步一点点、充实一点点、加油！！！