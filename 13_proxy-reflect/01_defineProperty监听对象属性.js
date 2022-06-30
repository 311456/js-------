// Object.defineProperty()实现
let obj = {
  name: "har",
  age: 24,
};

Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`获取${key}的值`);
      return value;
    },
    set: function (newValue) {
      console.log(`${key}设置新值:${newValue}`);
      value = newValue;
    },
  });
});

// 获取name的值
// har
// age设置新值:67
// 获取age的值
// 67
console.log(obj.name);
obj.age = 67;
console.log(obj.age);

//! 缺点
// 1. 本身 Object.defineProperty 的设计初衷就不是为了去截获对象的属性的。
//    我们给对象定义一些属性时，初衷就是定义普通的属性，但是使用该方式将属性强行变成了数据属性描述符了。
// 2. 如果想监听更加复杂的操作，比如新增属性、删除属性等，是不能使用该方式实现的。

// 操作没有被监听
obj.height = 1.88;
console.log(obj.height);
