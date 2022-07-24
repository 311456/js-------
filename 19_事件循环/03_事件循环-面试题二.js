// 1.简单测试
// async function foo() {
//   console.log("foo start");
//   await bar();
//   console.log("foo end");
// }
// async function bar() {
//   console.log("bar");
// }

// console.log("script start");
// foo();
// console.log("script end");

// 执行结果
// script start
// foo start
// bar
// script end
// foo end

// 2.正式面试题
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");

// 执行结果
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout