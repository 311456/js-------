let activeReactiveFn = null;
// 收集依赖的类。更加方便对不同依赖的管理
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  // 添加依赖
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }
  // 执行依赖
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}
// 传入对象和key，获取其依赖（depend）
const weakMap = new WeakMap();
function getDepend(target, key) {
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
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

//! 自动将对象置为响应式数据---Object.defineProperty
function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set(newValue) {
        value = newValue;
        const depend = getDepend(obj, key);
        depend.notify();
      },
    });
  });
  return obj;
}

const obj = {
  name: "hhh",
  age: 56,
};
const objProxy = reactive(obj);
watchFn(function () {
  console.log(objProxy.name, "----name1--obj");
  console.log(objProxy.name, "----name2---obj");
});

// vue3响应式实现：
const info = reactive({
  name: "info",
  height: 1.88,
});
watchFn(() => {
  console.log(info.name, "------info");
});

console.log("-------------改变数据之后--------------");
objProxy.name = "newName";
info.name = "ooooooo";
