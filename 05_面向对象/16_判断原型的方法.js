//! 1.hasOwnProperty ---- 检测自身
var info = {
  name: "hhh",
};
var obj = Object.create(info, {
  // 该属性是添加到自身
  address: {
    enumerable: true,
    value: "四川省",
  },
});
console.log(obj); // { address: '四川省' }
// 判断name是否是obj自己的属性
console.log(obj.hasOwnProperty("name")); // false
console.log(obj.hasOwnProperty("address")); // true

//! 2.in /for in ---- 检测自身和原型链
console.log("name" in obj); // true
console.log("address" in obj); // true
for (var item in obj) {
  console.log(item); // address  name
}

//! 3.instanceof----对象 构造函数
function Person() {}
var p = new Person();
// p对象 是否是 Person函数 的实例
console.log(p instanceof Person); // true

//! 4.isPrototypeOf----对象 对象
// Person的原型对象 是否出现在 p对象 的原型链上
console.log(Person.prototype.isPrototypeOf(p)); // true
