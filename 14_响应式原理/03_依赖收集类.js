// 可以通过不同的depend来管理不同的依赖。

// 1.收集依赖的类。更加方便对不同依赖的管理
class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  // 添加依赖
  addDepend(fn) {
    this.reactiveFns.push(fn);
  }
  // 执行依赖
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}
let nameDepend = new Depend();
function watchFn(fn) {
  nameDepend.addDepend(fn);
}

const obj = {
  name: "hhh",
  age: 56,
};
// 2.添加依赖到类中
watchFn(function () {
  console.log(obj.name, "-------0");
  console.log(obj.name, "-------1");
  console.log(obj.name, "-------2");
});
watchFn(function () {
  console.log(obj.name, "other");
});

watchFn(function () {
  console.log(obj.age, "----age");
});

// 3.监听到变化就执行收集的依赖
obj.name = "xxx";
obj.age = 9999;
nameDepend.notify();
