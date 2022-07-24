// 1.普通函数
function normal() {}

// 2.异步函数
async function asyncFn() {}
const asyncFn1 = async function () {};
const asyncFn2 = async () => {};

// 3.执行流程
// 3.1：没有特殊操作的异步函数和普通函数的执行流程没有区别
async function foo() {
  console.log("foo start");
  console.log("foo end");
  throw new Error("err--------------");
}
console.log("js start");
foo().catch((err) => {
  console.log("-----catch err-----");
});
console.log("js end");
