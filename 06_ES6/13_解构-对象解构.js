// 对象解构：按照key进行解构，没有顺序
var obj = {
  name: "hhh",
  age: 21,
};
// 1.基本解构
var { age, name } = obj;
console.log(name, age); // hhh 21

// 2.解构重新命名
var { name: newName } = obj;
console.log(newName); // hhh

// 3.默认值
var { age, address = "default" } = obj;
console.log(age, address); // 21 default

function log({ name, age }) {
  console.log(name, age);
}
log(obj) // hhh 21
