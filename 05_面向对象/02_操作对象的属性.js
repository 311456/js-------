var obj = {
  name: "hhh",
  age: 18,
  foo: function () {
    console.log("foo");
  },
};
// 访问属性
console.log(obj.name);
// 删除属性
delete obj.age;
console.log(obj);
