const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
//! 已实现：链式调用（返回值的问题）、封装了一个工具函数execteFnWithCatchErr

// utils
/**
 * 执行函数并且捕获执行过程中的错误
 * @param {function} fn 要执行的函数
 * @param {*} value 函数参数
 * @param {*} resolve
 * @param {*} reject
 */
function execteFnWithCatchErr(fn, value, resolve, reject) {
  try {
    const res = fn(value);
    // 1.返回值是promise的情况
    if (res instanceof HxPromise) {
      res.then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    } else if (
      // 2.返回值是实现了then方法的对象
      Object.prototype.toString.call(res) === "[object Object]" &&
      res.then
    ) {
      res.then(resolve, reject);
    } else {
      // 3.普通数据
      resolve(res);
    }
  } catch (err) {
    reject(err);
  }
}
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
          this.onFulfilledFns.forEach((onFulfilled) => onFulfilled(this.value));
        }, 0);
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((onRejected) => onRejected(this.reason));
        }, 0);
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  // 传入2个函数
  then(onFulfilled, onRejected) {
    return new HxPromise((resolve, reject) => {
      // 1.在setTimeout里再次调用then时，直接执行传入的函数即可
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        // try {
        //   const res = onFulfilled(this.value);
        //   resolve(res);
        // } catch (err) {
        //   reject(err);
        // }
        execteFnWithCatchErr(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        // try {
        //   const res = onRejected(this.reason);
        //   resolve(res);
        // } catch (err) {
        //   reject(err);
        // }
        execteFnWithCatchErr(onRejected, this.reason, resolve, reject);
      }
      // 2.将正常调用的then传入的方法加到数组中执行
      if (this.status === PROMISE_STATUS_PENDING) {
        //! 因为要获取执行结果，所以不直接将函数传递进去，而是传递一个包装过的函数，便于我们获取执行结果
        this.onFulfilledFns.push(() => {
          // try {
          //   const res = onFulfilled(this.value);
          //   resolve(res);
          // } catch (err) {
          //   reject(err);
          // }
          execteFnWithCatchErr(onFulfilled, this.value, resolve, reject);
        });
        this.onRejectedFns.push(() => {
          // try {
          //   const res = onRejected(this.reason);
          //   resolve(res);
          // } catch (err) {
          //   reject(err);
          // }
          execteFnWithCatchErr(onRejected, this.reason, resolve, reject);
        });
      }
    });
  }
}
const promise = new HxPromise((resolve, reject) => {
  // reject("bb");

  resolve("aa");
  // throw new Error("promise err msg");
});

// 1.promise链式调用
promise
  .then(
    (res) => {
      console.log("res:", res);
      // return "then res";
      throw new Error("err msg");
    },
    (err) => {
      console.log("err:", err);
      // return "then err";
      throw new Error("err msg");
    }
  )
  .then(
    (res) => {
      console.log("res2:", res);
    },
    (err) => {
      console.log("err2:", err);
    }
  );

// 2.返回值是promise
promise
  .then((res) => {
    console.log("res:", res);
    // 1.promise
    // return new HxPromise((resolve, reject) => {
    //   // resolve("new Promise");
    //   reject("new Promise");
    // });
    // 2.实现then方法的对象
    return {
      then: function (resolve, reject) {
        // resolve("obj then resolve");
        reject("obj then reject");
      },
    };
  })
  .then(
    (res) => {
      console.log("res2:", res);
    },
    (err) => {
      console.log("err2:", err);
    }
  );
