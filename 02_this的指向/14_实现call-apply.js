// 1.基本用法
var obj = { name: "obj" };
function test() {
  console.log("this---", this);
}
// test.call(obj); // this--- { name: 'obj' }

// 核心代码实现
function core(thisArg, args, _this) {
  args = args || [];
  // 1.获取要执行的函数
  var fn = _this;
  // 2.将要执行的函数绑定到传入的this上，但是this可能不是一个对象，就不能绑定方法，所以我们需要将传入的参数进行转换
  thisArg =
    thisArg === undefined || thisArg === null ? window : Object(thisArg);
  var key = Symbol();
  thisArg[key] = fn;
  // 3.传入参数执行函数
  var res = thisArg[key](...args);
  // 4.删除添加的属性
  delete thisArg[key];
  // 5.如果函数执行有返回值就将返回值返回
  return res;
}
Function.prototype.callFn = function (thisArg, ...args) {
  return core(thisArg, args, this);
};
Function.prototype.applyFn = function (thisArg, args) {
  return core(thisArg, args, this);
};
test.callFn(undefined); // window
test.applyFn(obj); // this--- { name: 'obj', [Symbol()]: [Function: test] }
