// 可以通过不同的depend来管理不同的依赖。

// 收集依赖的类。更加方便对不同依赖的管理
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
// 传入对象和key，获取其依赖（depend）
const weakMap = new WeakMap();
/**
 * 该函数会返回传入对象的属性的所有依赖
 * @param {*} target 对象
 * @param {*} key 属性
 * @returns 对象属性的依赖
 */
function getDepend(target, key) {
  // weakMap.set(target).set("name")
  let map = weakMap.get(target);
  // 第一次访问是没有数据的
  if (!map) {
    map = new Map();
    weakMap.set(target, map);
  }

  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}
// let nameDepend = new Depend();
// function watchFn(fn) {
//   nameDepend.addDepend(fn);
// }

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
    // 获取对应的依赖，然后执行
    const depend = getDepend(target, key);
    console.log(depend);
    depend.notify();
  },
});

// 依赖收集的管理
// const objMap = new Map();
// objMap.set("name", "dependFns");
// objMap.set("age", "dependFns");
// weakMap.set(obj, objMap);

// watchFn(function () {
//   console.log(objProxy.name, "-------0");
//   console.log(objProxy.name, "-------1");
//   console.log(objProxy.name, "-------2");
// });
// watchFn(function () {
//   console.log(objProxy.name, "other");
// });

// watchFn(function () {
//   console.log(objProxy.age, "----age");
// });

// 修改了2次，所以所有的依赖将会被执行两次
objProxy.name = "xxx";
objProxy.age = 9999;
