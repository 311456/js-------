let obj = {
  name: "har",
  age: 12,
};
const proxyObj = new Proxy(obj, {
  get: function (target, key) {
    console.log(target, `获取${key}的值`);
    // 因为proxy出现的原因就是：不希望直接修改对象，可是原来的方式还是在操作源对象，违背本意，所以结合Reflect进行实现
    // return target[key];
    return Reflect.get(target, key);
  },
  set(target, key, newValue) {
    console.log(target, `${key}设置新值:${newValue}`);
    // Reflect 返回一个布尔值，可以通过该返回值确定是否设置成功
    Reflect.set(target, key, newValue);
  },
});

// 修改和访问对象的值
proxyObj.age = 999;
console.log(proxyObj.age);

// 查看源数据的值是否被同步修改
console.log(obj.age); // 999
