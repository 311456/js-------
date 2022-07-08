const obj = {
  _name: "hhh",
  get name() {
    return this._name;
  },
  set name(newValue) {
    this._name = newValue;
  },
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 通过浏览器执行，可以明确的知道 receiver 是我们的proxy对象，这里即objProxy
    console.log("get------", key, receiver);

    // 直接这样执行，虽然是拦截了对于name的访问，但是obj本身里面对于_name的访问并没有被拦截。
    // 也就是说obj里面的this依旧是obj对象
    // return Reflect.get(target, key);

    // 通过传入我们的代理对象，可以修改obj对象中的this，也就是说我们可以对原对象中的get、set方法进行拦截了
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newValue, receiver) {
    console.log("set------", key, receiver);
    // Reflect.set(target, key, newValue);
    Reflect.set(target, key, newValue, receiver);
  },
});

objProxy.name = "xxx";

console.log(objProxy.name);
// get------ name { _name: 'hhh', name: [Getter/Setter] }
// get------ _name { _name: 'hhh', name: [Getter/Setter] }
// hhh
