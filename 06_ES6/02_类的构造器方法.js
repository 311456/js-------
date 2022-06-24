class Person {
  // 构造函数只能有一个
  // 如果没写，会调用默认的构造函数。
  constructor(name, age) {
    // 1.在内部创建一个对象
    // 2.将构造函数的prototype属性赋值给创建出来的对象的__proto__属性
    // 3.将构造函数内部的this绑定给创建出来的对象
    // 4.执行构造函数
    // 5.返回创建的对象或返回构造函数返回的值
    this.name = name;
    this.age = age;
  }
}
var p = new Person("hhh", 67);
console.log(p); // Person { name: 'hhh', age: 67 }