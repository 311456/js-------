const names = ["aaa", "bbb"];
const name = "har";

//! 1.函数调用
function foo(m, n) {
  console.log(m, n);
}
foo(...names); // aaa bbb

//! 2.数组构建
const newNames = [...names, ...name];
const newNames2 = [...names, 78];
console.log(newNames); // [ 'aaa', 'bbb', 'h', 'a', 'r' ]
console.log(newNames2); // [ 'aaa', 'bbb', 78 ]

//! 3.对象构建(ES2018新增----浅拷贝)
const info = {
  name: "har",
  age: 26,
  firends: { name: "firend" },
};
const obj = { ...info };
const obj2 = { ...info, name: "xxx" };
console.log(obj, "-----", obj2); // { name: 'har', age... } ----- { name: 'xxx', age... }

obj.firends.name = "changed friend";
// 因为是浅拷贝，所以直接拷贝的是浅层的地址值，当修改地址指向的对象属性时，原数据也会发生改变
console.log(info.firends.name); // changed friend
