// vue3响应式原理：收集依赖的数据结构就是WeakMap
const obj = {
  name: "harrrr",
};
function handleObjName() {
  console.log("处理obj的name属性");
}

const obj2 = {
  name: "xdy",
};
function handleObj2Name() {
  console.log("处理obj2的name属性");
}
// 1.创建数据存储结构
const weakMap = new WeakMap();
const map1 = new Map();
const map2 = new Map();

// 2.收集依赖
// obj
map1.set("name", [handleObjName]);
weakMap.set(obj, map1);
// obj2
map2.set("name", [handleObj2Name]);
weakMap.set(obj2, map2);

// 3.监听到数据变化(Proxy、Object.defineProperty)，做出处理
if (obj) {
  const resMap = weakMap.get(obj);
  const fns = resMap.get("name");
  fns.forEach((item) => item());
}
