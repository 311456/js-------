const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
//! 已实现：可以调用then方法，传入resolve或reject函数可以正确获取结果

//! 缺点1：创建之后不调用then会报错
//! 原因：因为没有传入对应的resolve和reject函数，那么在constructor中的onFulfilled和onRejected函数就没有对应的值,为undefined
//! 缺点2：不可以链式调用以及重复调用、其他复杂的用法
class HxPromise {
  constructor(executor) {
    // 通过status来决定状态，状态一旦确定便不可更改
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 将修改状态的代码放在queue外面，是为了实现状态的确定性。
        // 如果放在外面，则调用resolve后还可以调用reject（因为调用时状态还是pending，2个的判断都会通过）
        this.status = PROMISE_STATUS_FULFILLED;
        // 通过setTimeout将代码添加到宏任务中，这样不会阻塞主线程的执行，当执行then之后就会有OnFulfilled函数了
        // 但是setTimeout也不好，换用queueMicrotask，使用方法同setTimeout，不过queueMicrotask是将代码添加到微任务中
        queueMicrotask(() => {
          this.value = value;
          // 通过then调用传入的res函数
          this.onFulfilled(value);
        }, 0);
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        queueMicrotask(() => {
          this.reason = reason;
          this.onRejected(reason);
        }, 0);
      }
    };
    executor(resolve, reject);
  }
  // 传入2个函数
  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
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
