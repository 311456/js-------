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

let activeReactiveFn = null;
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

const obj = {
  name: "hhh",
  age: 56,
};
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 通过target，key获取正确的depend
    const depend = getDepend(target, key);
    // 将当前执行的函数（即依赖）传递到fns中
    depend.addDepend(activeReactiveFn);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver);
    // 获取对应的依赖，然后执行
    const depend = getDepend(target, key);
    // console.log(depend);
    depend.notify();
  },
});

watchFn(function () {
  console.log(objProxy.name, "----name1");
  console.log(objProxy.name, "----name2");
});

watchFn(function () {
  console.log(objProxy.age, "----age");
});
watchFn(function () {
  console.log(objProxy.name, "----both1");
  console.log(objProxy.age, "----both2");
});

console.log("-------------改变数据之后--------------");
objProxy.name = "newName";
// objProxy.age = 100000;
