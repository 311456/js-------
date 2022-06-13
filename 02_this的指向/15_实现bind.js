var obj = {
  name: "obj",
};
function test() {
  console.log(this);
}
// var newTest = test.bind(obj);
// newTest(); // { name: 'obj' }

Function.prototype.bindFn = function (thisArg, ...args) {
  // 1.获取要绑定的函数
  var fn = this;
  // 2.将函数绑定到this上
  thisArg =
    thisArg === undefined || thisArg === null ? window : Object(thisArg);
  // 3.将传入的参数合并（bind时参数和调用时参数）
  function newFn(...newArgs) {
    var key = Symbol();
    thisArg[key] = fn;
    var finalArgs = [...args, ...newArgs];
    var res = thisArg[key](...finalArgs);
    delete thisArg[key];
    return res;
  }
  // 4.将新生成的函数返回
  return newFn;
};
function sum(x, y) {
  console.log(x, y, this);
}
var newSum = sum.bind(obj, 3, 4);
newSum();
var newSum2 = sum.bind(obj, 8);
newSum2(8);
