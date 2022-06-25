//! 1.if
if (true) {
  var foo = "foo";
  let bar = "bar";
}
console.log(foo);
// console.log(bar); // ReferenceError: bar is not defined

//! 2.switch
switch ("a") {
  case "a":
    var foo1 = "foo1";
    let bar1 = "bar1";
}
console.log(foo1);
// console.log(bar1); // ReferenceError: bar1 is not defined

//! 3.for
for (var i = 0; i < 2; i++) {}
for (let j = 0; j < 2; j++) {}
console.log(i); // 2
// console.log(j); // ReferenceError: j is not define

var btns = document.getElementsByTagName("button");

// 没有块级作用域，所以我们在绑定时获取的是全局的k
// for (var k = 0; k < btns.length; k++) {
//   btns[k].onclick = function () {
//     console.log(k);
//   };
// }

//! 改进后
// for (var k = 0; k < btns.length; k++) {
//   (function (k) {
//     btns[k].onclick = function () {
//       console.log(k);
//     };
//   })(k);
// }

//! 现在：找到for块级作用域里面的k，每一次的k都不一样
 for (let k = 0; k < btns.length; k++) {
  btns[k].onclick = function () {
    console.log(k);
  };
}
