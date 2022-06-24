function Person(name, friends) {
  this.name = name;
  this.friends = friends;
}
Person.prototype.eating = function () {
  console.log(this.name + " eating");
};

function Student(name, friends, sid) {
  // !借用构造函数继承
  Person.call(this, name, friends);
  this.sid = sid;
}
Student.prototype = new Person();
Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var s1 = new Student("hhh", ["hhh"], 1);

//!缺点(已解决)
// 1.继承的属性不能查看，不方便使用
console.log(s1); // 已经有name等属性了

// 2.不同对象互相影响
var s2 = new Student("xxx", ["xxx"], 222);
s1.friends.push("kkxy");
console.log(s2.friends); // xxx
s1.name = "aaa";
console.log(s2.name); // xxx
console.log(s1); // aaa...

// 3.不方便传值
var s3 = new Student("yyy", ["yyy"], 333); // 方便传值了


//! 新缺点
// 1.Person函数至少被调用2次（改变原型链一次，绑定this一次）
// 2.中间对象多出来了没有用的属性（改变原型链时调用的Person） 