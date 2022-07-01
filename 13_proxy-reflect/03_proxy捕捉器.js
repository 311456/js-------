const obj = {
  name: "har",
  age: 67,
};
const proxyObj = new Proxy(obj, {
  get(target, key) {
    return target[key];
  },
  set(target, key, newValue) {
    target[key] = newValue;
  },
  // 监听in操作
  has(target, key) {
    return key in target;
  },
  // 监听delete操作
  deleteProperty(target, key) {
    delete target[key];
  },
});

proxyObj.name = "xxx";
console.log(proxyObj.name); // xxx
console.log("name" in proxyObj); // true
delete proxyObj.age;
console.log(proxyObj); // { name: 'xxx' }
console.log(obj); // { name: 'xxx' }
