const obj = {
  name: "hhh",
  age: 23,
};

// 当obj.name发生变化时，其相关的代码将会重新执行
obj.name = "xxx";
console.log(obj.name);
