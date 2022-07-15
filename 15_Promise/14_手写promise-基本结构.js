// 参考标准：https://promisesaplus.com/
//! 已实现：promise的基本结构
// 1.创建promise
// 2.传入的resolve或者reject会立即被调用
// 3.promise状态一旦确定便不可更改

const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class HxPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        console.log(value);
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        console.log(reason);
      }
    };
    executor(resolve, reject);
  }
}

const promise = new HxPromise((resolve, reject) => {
  reject("bb");
  resolve("aa");
});
