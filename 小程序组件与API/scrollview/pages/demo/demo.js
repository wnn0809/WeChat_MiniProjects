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