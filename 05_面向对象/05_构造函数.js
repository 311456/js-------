// 约定俗成，函数大写开头为构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var p1 = new Person("hhh", 13);
var p2 = new Person("xxx", 18);
console.log(p1, p2); // Person { name: 'hhh', age: 13 } Person { name: 'xxx', age: 18 }
console.log(Object.prototype.toString.call(p1)); // object
