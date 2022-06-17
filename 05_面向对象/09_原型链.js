var obj = {};

console.log(obj.__proto__.__proto__); // null
console.log(Object.prototype.__proto__); // null
// console.log(obj.__proto__.__proto__.__proto__); // 报错，因为null没有__proto__属性
//! 所以：打印出来的obj的最顶层原型为null

console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.__proto__.__proto__ === Object.prototype.__proto__); // true
//! 经过验证可得，Object.prototype是我们的最顶层原型对象 
