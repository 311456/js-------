function foo() {}

console.log(foo.prototype);
console.log(Object.getOwnPropertyDescriptors(foo.prototype));
// {
//   constructor: {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }

// 可以发现函数的原型对象的constructor属性指向本身
console.log(foo.prototype.constructor); // [Function: foo]
console.log(foo.prototype.constructor === foo); // true

// 修改原型上的属性
foo.prototype = {
  name: "hhh",
  age: 17,
};
// 真实开发中通过该方式添加constructor
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: foo,
});
