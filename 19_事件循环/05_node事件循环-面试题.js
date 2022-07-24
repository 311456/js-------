// 使用node执行

// 执行顺序：
// js主线程

// （微任务队列）
// nextTick队列 ：process.nextTick事件
// other microtask 队列：Promise.then、queueMicrotask

// （宏任务队列）
// timer 队列：setTimeout、setInterval（定时器阶段）
// poll 队列：IO事件（轮询阶段）
// check 队列：setImmediate（检测阶段）
// close 队列：close事件（关闭回调阶段）

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script atart");

setTimeout(function () {
  console.log("setTimeout0");
}, 0);

setTimeout(function () {
  console.log("setTimeout1");
}, 300);

setImmediate(() => console.log("setImmediate"));

process.nextTick(() => console.log("nextTick1"));

async1();

process.nextTick(() => console.log("nextTick2"));

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});

console.log("script end");

// 执行结果

// js主线程执行
// script atart
// async1 start
// async2
// promise1
// promise2
// script end

// nextTick queue 执行（微任务）
// nextTick1
// nextTick2

// 其他微任务队列执行（微任务）
// async1 end
// promise3

// timer queue 执行（宏任务）
// setTimeout0

// check queue 执行（宏任务）
// setImmediate

// 下一次Tick被添加到timer queue 执行（宏任务）
// setTimeout1

// 以下代码的执行顺序是不一定的。(可以多次执行查看结果)
// 原因：跟 setTimeout 执行回调的时间有关。如果setTimeout 能够及时被加入到事件循环的任务队列中，则先执行seTimeout
// 如果没有及时加入，则setImmediate先执行。（涉及libuv源码）
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);
// setImmediate(() => {
//   console.log("setImmediate1");
// });
// setImmediate(() => {
//   console.log("setImmediate2");
// }, 300);
