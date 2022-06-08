// 以上代码执行会报错，因为在解析的时候会变成
// var obj = {
// id: "hhhh",
// }[1, 2, 3].forEach(foo, obj);
// forEach之前当作一个整体。解决这个问题需要在obj对象后加上分号

function foo(el) {
  console.log(el, this.id);
}
var obj = {
  id: "hhhh",
}
[1, 2, 3].forEach(foo, obj);
