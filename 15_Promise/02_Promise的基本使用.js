console.log(Promise.prototype);
// Promise对象方法：原型对象上的方法：constructor、then、catch
console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
// Promise类方法：all、allSettled、any、race、resolve、reject
console.log(Object.getOwnPropertyDescriptors(Promise));

// Promise类的基本结构
class PromiseFn {
  constructor(executor) {
    const resolve = () => {};
    const reject = () => {};
    executor(resolve, reject);
  }
  // 原型对象上的方法
  then() {}
  catch() {}
  finally() {}
  // 类的方法
  static resolve() {}
  static reject() {}
  static all() {}
  // ...any、race、allSettled
}

function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve("success");
      } else {
        reject("failure");
      }
    }, 3000);
  });
}
// Promise执行resolve时自动执行then传入的回调函数
request("promise").then((res) => console.log(res));

// Promise执行reject时自动执行catch传入的回调函数
request().catch((err) => console.log(err));

// 连续传入
request("hhh").then(
  // resolve
  (res) => {
    console.log(res);
  },
  // reject
  (err) => {
    console.log(err);
  }
);
