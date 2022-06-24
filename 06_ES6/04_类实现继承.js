class Person {
  constructor(name) {
    this.name = name;
  }
  eating() {
    console.log(this.name + " eating");
  }
  running() {
    console.log("Person is running");
  }
  static parentMethod() {
    console.log("static");
  }
}

// 通过extends关键字实现继承
class Student extends Person {
  constructor(name, sid) {
    // 在使用this之前必须使用super调用父类的构造函数
    super(name);
    this.sid = sid;
  }
  // 1.重写父类的eating方法
  eating() {
    console.log("student " + this.name + " eating");
  }

  // 2.需要复用父类的方法逻辑
  running() {
    super.running();
    console.log("Student is running");
  }

  // 3.静态属性的继承
  static parentMethod(){
    super.parentMethod()
    console.log("studen static");
  }
}

var s = new Student("hhh", 193104);
console.log(s); // Student { name: 'hhh', sid: 193104 }
// hhh eating
s.eating(); // 重写之后 student hhh eating
s.running(); // Person is running  , Student is running
Student.parentMethod();
