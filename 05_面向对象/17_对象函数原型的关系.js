//! js内置的函数/类
// function Object(){} 创建对象
// function Function(){} 创建函数

//! 等价于 var Foo = new Function()
function Foo() {}

//! var Object = new Function()
var obj = new Object();

// 1.Foo作为函数,那么就有 prototype 属性
// Foo.prototype 来自哪里？
// 答案：内部自己会创建一个对象，Foo.prototype = {constructor: Foo}

// 2.Foo作为对象，那么就有 __proto__ 属性
// Foo.__proto__ 来自哪里？
// 答案：来自 new Function()。Foo.__proto__ = Function.prototype
// Function.prototype = {constructor： Function ...}

// 综上，那么Function对应的关系应该为
// Function.prototype === {constructor: Function ...} === Function.__proto__

// console.log(Object.getOwnPropertyDescriptors(Function.prototype));
console.log(Function.prototype === Function.__proto__); // true
console.log(Object.__proto__ === Function.prototype); // true
console.log(obj.__proto__ === Object.prototype); // true
