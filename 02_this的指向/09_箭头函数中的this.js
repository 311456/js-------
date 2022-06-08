var obj = {
  data: [],
  // 基本函数的实现
  getData: function () {
    // 发送网络请求，将结果赋值给data
    var _this = this;
    setTimeout(function () {
      var result = [1, 2, 3];
      // 但是this绑定的是window
      _this.data = result;
    }, 2000);
  },
  // 箭头函数实现
  bar: function () {
    // 箭头函数寻找上层作用域的this，也就是obj。常见使用场景。
    setTimeout(() => {
      var result = [2, 3, 4];
      this.data = result;
    }, 2000);
  },
};

obj.getData();
