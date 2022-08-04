var x = 1;
// 当函数参数有默认值时，函数参数会生成一个参数作用域
function foo(
  x,
  y = function () {
    x = 2;
    console.log(x);
  }
) {
  console.log(x);
  var x = 3;
  y();
  console.log(x);
}

// foo();
foo(x);
console.log(x);

// 执行结果：
// undefined （是 var x = 3）(如果有传参数，则是参数的值)
// 2 （是参数x）
// 3 （是 var x = 3）
// 1 （全局 x）
