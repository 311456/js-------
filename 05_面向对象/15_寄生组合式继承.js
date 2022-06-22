function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.eatting = function () {
  console.log("eatting");
};
function Student(name, age, sid) {
  Person.call(this, name, age);
  this.sid = sid;
  this.studying = function () {
    console.log("studying");
  };
}

Student.prototype = Object.create(Person.prototype);
Object.defineProperty(Student.prototype, "constructor", {
  configurable: true,
  enumerable: false,
  writable: true,
  value: Student,
});
// inheritPrototype(Student,Person)

var stu1 = new Student("hhh", 17, 193104);
console.log(stu1);
// Student {
//   name: 'hhh',
//   age: 17,
//   sid: 193104,
//   studying: [Function (anonymous)]
// }
stu1.eatting(); // eatting
console.log(stu1.constructor.name); // Student

// 以上继承的方式可能以后还是会用到，所以我们可以将其封装成一个工具函数
/**
 * 实现继承
 * @param {Function} subType 子类
 * @param {Function} SuperType 父类
 */
function inheritPrototype(subType, SuperType) {
  // 子类的原型指向了父类的实例对象。
  // 因为我们将子类的原型对象重新赋值了，所以子类的原型对象中并没有constructor属性，所以在查找其constructor属性时依然使用的是父类原型对象上的属性。
  subType.prototype = Object.create(SuperType.prototype);
  // 重新定义子类原型对象的构造函数指向
  Object.defineProperty(subType.prototype, "constructor", {
    configurable: true,
    enumerable: false,
    writable: true,
    value: subType,
  });
}
