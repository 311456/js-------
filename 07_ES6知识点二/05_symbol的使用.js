const obj = {
  name: "hah",
};
//! 1.基本使用
const s1 = Symbol();
const s2 = Symbol();
console.log(s1); // Symbol()
console.log(s1 === s2); // false

//! 2.添加描述
const s3 = Symbol("desc");
console.log(s3.description); // desc

//! 3.添加对象属性
obj[s1] = "s11111";
obj[s2] = "s222";
console.log(obj); // { name: 'hah', [Symbol()]: 's11111' }

//! 4.获取对象的key --- Object.getOwnPropertySymbols(obj)
console.log(Object.keys(obj)); // [[ 'name' ]]
console.log(Object.getOwnPropertyNames(obj)); // [ 'name' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(), Symbol() ]
const skeys = Object.getOwnPropertySymbols(obj);
for (const skey of skeys) {
  console.log(obj[skey]); // s11111  s222
}

//! 5.创建一样的symbol --- Symbol.for(key)
const sx = Symbol.for("aaa");
const sy = Symbol.for("aaa");
console.log(sx === sy); // true

// 获取symbol的key --- Symbol.keyFor()
const key = Symbol.keyFor(sx);
console.log(key); // aaa
const sz = Symbol.for(key);
console.log(sz === sx); // true
