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
// 执行函数，然后进入到proxy中进行依赖收集
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}

// 自动将对象置为响应式数据-----Proxy
function reactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      // 通过target，key获取正确的depend
      const depend = getDepend(target, key);
      // 将当前执行的函数（即依赖）传递到fns中
      // depend.addDepend(activeReactiveFn);

      // 不用关注其他外部变量，函数更加纯粹
      depend.depend();
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
}

const obj = {
  name: "hhh",
  age: 56,
};
const objProxy = reactive(obj);
watchFn(function () {
  console.log(objProxy.name, "----name1");
  console.log(objProxy.name, "----name2");
});

// vue3响应式实现：
const info = reactive({
  name: "info",
  height: 1.88,
});
watchFn(() => {
  console.log(info.name);
});

console.log("-------------改变数据之后--------------");
objProxy.name = "newName";
info.name = "ooooooo";
// objProxy.age = 100000;
