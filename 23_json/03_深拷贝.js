const obj = {
  name: "hxxx",
  age: 78,
  firends: {
    name: "firends name",
  },
  [Symbol()]: "symbol",
  xxx: undefined,
  foo: function () {
    return "foo";
  },
};

// 1.引用赋值（浅拷贝）
const info = obj;

// 2.展开运算符（浅拷贝）
const info1 = { ...obj };

// 3.json实现深拷贝，但是不能处理其中的函数、undefined、symbol
const tem = JSON.stringify(obj);
const info2 = JSON.parse(tem);

//修改obj，但是info、info1的值发生了改变
obj.firends.name = "new name----";
console.log("info---", info);
console.log("info1", info1);

console.log("info2", info2);
