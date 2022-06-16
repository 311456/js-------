// 原型加构造函数创建对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 共有的方法或者属性添加到原型上
Person.prototype.eatting = function () {
  console.log(this.name + "吃东西东西");
};

var p1 = new Person("hhh", 68);
console.log(p1.name, p1.age); // hhh 68
p1.eatting(); // hhh吃东西东西
