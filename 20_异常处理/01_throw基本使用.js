// throw 和 return 的区别
// throw之后后面所有的代码都不会执行了
// return 之后只是函数不再执行了

function foo() {
  // throw "foo err message";
  return "foo err message";
}
console.log("js start");
console.log("result---------", foo());
console.log("js end");
