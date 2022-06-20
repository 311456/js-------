function Person(name) {
  this.name = name;
  this.friends = [];
}
Person.prototype.eatting = function () {
  console.log(this.name + " eatting");
};

function Student(sid) {
  this.sid = sid;
}
// 将Student的原型对象指向Person类的实例----继承的关键
// （不能和在原型上添加属性的步骤写反，不然将原型重新赋值之后就将原本的属性进行覆盖了）
Student.prototype = new Person("hhh");
Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

var s1 = new Student(14);
// console.log(s1.name);
// s1.eatting();

//!缺点
// 1.继承的属性不能查看，不方便使用
console.log(s1); //不能看见name，eatting等属性

// 2.不同对象互相影响
var s2 = new Student(444);
//^ 获取引用，修改引用的值，同一个类的不同实例之间会互相影响（是一个查找的过程，则找到的是原型链上的属性）
s1.friends.push("kkxy");
console.log(s2.friends); //s2的friends也发生了改变
//^ 直接修改对象上的属性，是在自身上添加对应的属性（是赋值的过程，在自身查找添加）
s1.name = "xxxx";
console.log(s2.name); // hhh
console.log(s1); // Person { sid: 14, name: 'xxxx' }

// 3.不方便传值
var s3 = new Student(34); // 该学生的名字不方便传递
