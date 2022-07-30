//! 1.开始阶段
// var name = "hxxx";
// var age = 45;
// function sum(n1, n2) {
//   return n1 + n2;
// }

//! 2.使用自执行函数
var moduleA = (function () {
  var name = "hxxx";
  var age = 45;
  function sum(n1, n2) {
    return n1 + n2;
  }
  return {
    name,
    age,
    sum,
  };
})();
