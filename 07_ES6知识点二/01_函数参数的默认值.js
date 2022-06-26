//! 1.给函数参数设置默认值
function foo(m = 10, n = 20) {
  console.log(m, n);
}
foo(); // 10 20
foo(30); // 30 20

//! 2.对象默认值
function foo1(obj = { name: "hhh", age: 18 }) {
  console.log(obj);
}
foo1(); // { name: 'hhh', age: 18 }
foo1({ name: "xxx" }); // { name: 'xxx' }

//! 3.对象默认值解构
function foo3({ name, age } = { name: "hhh", age: 21 }) {
  console.log(name, age);
}
foo3(); // hhh 21
foo3({ name: "xxx" }); // xxx undefined

// 解构更加常用的写法
function foo33({ name = "hhh", age = 21 } = {}) {
  console.log(name, age);
}
foo33(); // hhh 21
foo33({ name: "xxx" }); // xxx 21
foo33({ name: "xxx", age: 45 }); // xxx 45

//! 4.有默认值的参数最好放在后面，便于省略
function foo4(m, n = 67) {
  console.log(m, n);
}
foo4(6); // 6 67

//! 5.有默认值的函数的length属性。
function foo5(m, n) {
  console.log(m, n);
}
console.log(foo5.length); // 2

function foo55(m, n = 7) {
  console.log(m, n);
}
console.log(foo55.length); // 1

function foo555(m = 7, n) {
  console.log(m, n);
}
console.log(foo555.length); // 0

// 函数参数的length是 第一个默认参数之前 的所有参数的个数