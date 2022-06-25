// let const

// 1.不可以重复声明
var foo = "hhh";
var foo = "aaa";
let bar = "hhh";
// let bar ="aaa" //! SyntaxError: Identifier 'bar' has already been declared

// 2.const的值不可改变
const name = "hhar";
// name = "xxx"; //! TypeError: Assignment to constant variable.

// 因为obj保存是内存的地址值，所以只要地址值不发生改变即可。（即不要obj = xxx即可）
const obj = { name: "hhh" };
obj.name = "xxx";
console.log(obj); // { name: 'xxx' }
