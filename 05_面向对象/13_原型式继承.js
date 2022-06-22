// 针对对象
var obj = {
  name: "hhhh",
  eating: function () {},
};

// 方式一：
function createObj1(o) {
  var newObj = {};
  // 将传入的o设置为创建的对象的原型
  // 即 newObj.__proto__ = o
  Object.setPrototypeOf(newObj, o);
  return newObj;
}
// 方式二：道格拉斯的方式（当时还没有Object.setPrototypeOf方法）
function createObj2(o) {
  function fn() {}
  fn.prototype = o;
  // 对象的隐式原型等于其构造函数的显示原型
  // 即newObj.__proto__ === fn.prototype
  var newObj = new fn();
  return newObj;
}
// 方式三：
var p2 = Object.create(obj);
console.log(p2);
console.log(p2.__proto__);


var p = createObj2(obj);
console.log(p); // {}
console.log(p.__proto__); // { name: 'hhhh', eating: [Function: eating] }
