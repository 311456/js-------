// ||=：逻辑或
let str = "hello";
// str = str || "defalut";
str ||= "default";

console.log(str); // hello

// &&=：逻辑与。不怎么常用，别扭
let obj = {
  name: "har",
  foo: function () {
    console.log("foo is running");
  },
};
obj && obj.foo(); // 如果obj存在就调用obj.foo()
obj &&= obj.name;
console.log(obj); // har

// ??=：逻辑空
let foo = null;
foo ??= "default value";
console.log(foo); // default value
