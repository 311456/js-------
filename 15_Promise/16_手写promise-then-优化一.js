const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
//! 已实现：可以重复调用then方法、状态确定后可以在setTimeout中再次调用then

//! 缺点：还不可以链式调用
class HxPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          //! 将修改状态的又移到微任务中了，因为与then里面的判断有冲突。
          // 因为加进来就不能保证状态的不可修改，所以我们需要再加一层判断逻辑；如果状态确定，就返回
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          this.onFulfilledFns.forEach((fn) => fn(value));
          // this.onFulfilled(value);
        }, 0);
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => fn(reason));
          // this.onRejected(reason);
        }, 0);
      }
    };
    executor(resolve, reject);
  }
  // 传入2个函数
  then(onFulfilled, onRejected) {
    // 1.在setTimeout里再次调用then时，直接执行传入的函数即可
    if (this.status === PROMISE_STATUS_FULFILLED) {
      onFulfilled(this.value);
    }
    if (this.status === PROMISE_STATUS_REJECTED) {
      onRejected(this.reason);
    }
    // 2.将正常调用的then传入的方法加到数组中执行
    if (this.status === PROMISE_STATUS_PENDING) {
      this.onFulfilledFns.push(onFulfilled);
      this.onRejectedFns.push(onRejected);
    }
  }
}

const promise = new HxPromise((resolve, reject) => {
  reject("bb");

  resolve("aa");
});
promise.then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err);
  }
);
promise.then(
  (res) => {
    console.log("res2:", res);
  },
  (err) => {
    console.log("err2:", err);
  }
);
// const promise = new Promise((resolve, reject) => {
//   resolve("aa");
// });
setTimeout(() => {
  promise.then(
    (res) => {
      console.log("setTimeout res:", res);
    },
    (err) => {
      console.log("setTimeout err:", err);
    }
  );
}, 3000);
