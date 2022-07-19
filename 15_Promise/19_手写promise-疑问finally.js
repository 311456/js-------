const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
//! 已实现：finally方法

// utils
/**
 * 执行函数并且捕获执行过程中的错误
 * @param {function} fn 要执行的函数
 * @param {*} value 函数参数
 * @param {*} resolve
 * @param {*} reject
 */
function execteFnWithCatchErr(fn, value, resolve, reject) {
  // console.log("fn---------", String(fn));
  try {
    const res = fn(value);
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
      Object.prototype.toString.call(res) === "[object Object]" &&
      res.then
    ) {
      res.then(resolve, reject);
    } else {
      resolve(res);
    }
  } catch (err) {
    // console.log("+++++", err);
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
  then(onFulfilled, onRejected) {
    onRejected =
      onRejected ||
      ((err) => {
        throw err;
      });
    return new HxPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execteFnWithCatchErr(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execteFnWithCatchErr(onRejected, this.reason, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          //! 只要不加判断，finally就可以执行？？？

          //! 原因：因为在调用catch时，resolve为undefined，不判断则会被加入到this.onFulfilledFns数组中，
          //! 那么在执行 execteFnWithCatchErr 函数时，就会报“fn is not a funtion”，则会被catch捕获从而执行新promise的reject函数；
          //! 而该reject函数就是finally传递进去的reject对应的函数，所以finally调用的是reject分支的
          // if (onFulfilled) {
          console.log("ful", String(onFulfilled));
          execteFnWithCatchErr(onFulfilled, this.value, resolve, reject);
          // }
        });
        this.onRejectedFns.push(() => {
          // if (onRejected) {
          console.log("rej", String(onRejected));
          execteFnWithCatchErr(onRejected, this.reason, resolve, reject);
          // }
        });
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(onFinally) {
    // 不管是成功还是失败都调用传入的回调函数
    this.then(
      () => {
        console.log("------resolve rejected-------");
        onFinally();
      },
      () => {
        console.log("------reject rejected-------");
        onFinally();
      }
    );
  }
}

// const promise = new Promise((resolve, reject) => {
//   reject("bb");
// });
// promise
//   .catch((err) => {
//     console.log(err);
//     return "ccc";
//     // throw new Error("ccc");
//   })
//   .then((res) => {
//     console.log("cccc----", res);
//   });
const promise = new HxPromise((resolve, reject) => {
  // reject("bb");
  resolve("aa");
});
promise
  .then((res) => {
    console.log("res:", res);
    return "then res";
  })
  .catch((err) => {
    console.log("catch:", err);
  })
  .finally(() => {
    console.log("finally");
  });

//! 疑问：原生的promise里最后的finally是调用的resolve里的还是reject里的

//! 答案：是看前一次的promise是什么状态，就调用对应分支的finally。虽然不同分支的finally做到事情是一样的。 

//* 所以本代码调用finally的逻辑是错误的，只是恰好可以执行finally而已。
