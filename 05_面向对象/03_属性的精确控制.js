var obj = {
  name: "hhh",
  _address: "bj",
};
Object.defineProperty(obj, "address", {
  configurable: true, // 是否可删除或者是否可修改其特性
  enumerable: true, // 是否可枚举
  // 数据属性
  writable: true, // 是否可修改值
  value: "成都", // 属性的值
});

Object.defineProperty(obj, "address", {
  configurable: true,
  enumerable: true,
  // 存取属性
  get: function () {
    // 每次获取属性时就会调用
    console.log("get");
    // 隐藏了_address ,外部通过address获取
    return this._address;
  },
  set: function (value) {
    console.log("set");
    this._address = value;
  },
});

obj.address="xxx" // set
console.log(obj.address); // get xxx