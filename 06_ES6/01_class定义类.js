// 类的声明
class Person {}

// 类的表达式
var Person2 = class {};

// 类的相关特点 ---- 与函数继承、原型类似
console.log(Person.prototype); // {}
console.log(Person.prototype.__proto__); // [Object: null prototype] {}
console.log(Person.prototype.constructor); // [class Person]
console.log(typeof Person); // funtion

var p = new Person();
console.log(p.__proto__ === Person.prototype); // true
