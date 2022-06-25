// enhanced object literals
var name = "hhh";
var age = 18;

var obj = {
  // 1.属性简写（property shorthand）。如果key和value的名字相同，则可以简写
  name: name,
  age,
  // 2.函数简写（method shorthand）
  foo: function () {},
  foo1() {},
  // 3.计算属性名字（computed property names）
  [name + "xxxx"]: "6666",
};
console.log(obj);
