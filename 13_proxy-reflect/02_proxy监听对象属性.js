// proxy类的方式
let obj = {
  name: "har",
  age: 12,
};
const proxyObj = new Proxy(obj, {
  // 传入对应的捕获器，有13种之多
  // 监听对象被访问
  get: function (target, key) {
    console.log(target, `获取${key}的值`);
    return target[key];
  },
  // 监听对象被修改
  set(target, key, newValue) {
    console.log(target, `${key}设置新值:${newValue}`);
    target[key] = newValue;
  },
});

// 修改和访问对象的值
console.log(proxyObj.name);
proxyObj.age = 999;
console.log(proxyObj.age);

// 查看源数据的值是否被同步修改
console.log(obj.name); // har
console.log(obj.age); // 999
