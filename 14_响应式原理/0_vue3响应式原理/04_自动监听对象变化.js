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
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    // 3.监听到变化就执行收集的依赖
    nameDepend.notify();
  },
});
// 2.添加依赖到类中
watchFn(function () {
  console.log(objProxy.name, "-------0");
  console.log(objProxy.name, "-------1");
  console.log(objProxy.name, "-------2");
});
watchFn(function () {
  console.log(objProxy.name, "other");
});

watchFn(function () {
  console.log(objProxy.age, "----age");
});

// 修改了2次，所以所有的依赖将会被执行两次
objProxy.name = "xxx";
objProxy.age = 9999;
