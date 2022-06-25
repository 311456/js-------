// js中是单继承的，所以我们可以通过函数的一些技巧实现混入的效果，即实现多继承的效果
class Person {
  eating() {
    console.log("eating");
  }
}
function mixinRun(BaseClass) {
  return class extends BaseClass {
    // 书写要继承的类的方法
    running() {
      console.log("running");
    }
  };
}
function mixinSwim(BaseClass) {
  return class Swimmer extends BaseClass {
    swimming() {
      console.log("swimming");
    }
  };
}

var NewClass = mixinSwim(mixinRun(Person));
var newP = new NewClass();
newP.eating(); // eating
newP.running(); // running
newP.swimming(); // swimming
