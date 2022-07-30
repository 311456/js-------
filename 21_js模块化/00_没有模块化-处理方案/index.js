//! 缺点：容易 变量命名冲突，并且这种bug是很难排查的。
// 解决方式：使用自执行函数，让每一个文件都有自己的作用域。
// var name = "new name";

// console.log("index.js----name:", name);
// console.log("index.js----age:", age);
// console.log(sum(10, 20));

//! 自执行函数缺点：不同的公司要求的格式不一样，学习和维护成本较高。
(function () {
  var name = "new name";
})();
console.log("index.js----name:", moduleA.name);
console.log("index.js----age:", moduleA.age);
console.log(moduleA.sum(10, 20));
