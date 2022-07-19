const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

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
    onFulfilled =
      onFulfilled ||
      ((value) => {
        return value;
      });
    return new HxPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execteFnWithCatchErr(onFulfilled, this.value, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_REJECTED) {
        execteFnWithCatchErr(onRejected, this.reason, resolve, reject);
      }
      if (this.status === PROMISE_STATUS_PENDING) {
        this.onFulfilledFns.push(() => {
          execteFnWithCatchErr(onFulfilled, this.value, resolve, reject);
        });
        this.onRejectedFns.push(() => {
          execteFnWithCatchErr(onRejected, this.reason, resolve, reject);
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
        console.log("-----resolve finally-----");
        onFinally();
      },
      () => {
        console.log("-----reject finally-----");
        onFinally();
      }
    );
  }
  // 类方法
  static resolve(value) {
    return new HxPromise((resolve) => {
      resolve(value);
    });
  }
  static reject(reason) {
    return new HxPromise((resolve, reject) => {
      reject(reason);
    });
  }
  static all(promises) {
    const values = [];
    return new HxPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res);
            if (values.length === promises.length) {
              resolve(values);
            }
          },
          (err) => {
            reject(err);
          }
        );
      });
    });
  }
  static allSettled(promises) {
    const result = [];
    return new HxPromise((resolve) => {
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            result.push({ status: PROMISE_STATUS_FULFILLED, value: res });
            if (result.length === promises.length) {
              resolve(result);
            }
          },
          (err) => {
            result.push({ status: PROMISE_STATUS_REJECTED, reason: err });
            if (result.length === promises.length) {
              resolve(result);
            }
          }
        );
      });
    });
  }
  // 返回第一个执行完成的状态
  static race(promises) {
    return new HxPromise((resolve, reject) => {
      promises.forEach((promise) => {
        // promise.then(
        //   (res) => resolve(res),
        //   (err) => reject(err)
        // );
        promise.then(resolve, reject);
      });
    });
  }
  // 返回第一个fulfilled状态，如果全为reject，则抛出合并错误（AggregateError），获取具体错误信息通过 .errors 获取
  static any(promises) {
    const reasons = [];
    return new HxPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(
          (res) => resolve(res),
          (err) => {
            reasons.push(err);
            if (reasons.length === promises.length) {
              reject(new AggregateError(reasons));
            }
          }
        );
      });
    });
  }
}

const p1 = new HxPromise((resolve, reject) => {
  setTimeout(() => reject(111), 4000);
});
const p2 = new HxPromise((resolve, reject) => {
  setTimeout(() => reject(222), 2000);
});
const p3 = new HxPromise((resolve, reject) => {
  setTimeout(() => reject(333), 3000);
});

HxPromise.any([p1, p2, p3]).then(
  (res) => {
    console.log("res:", res);
  },
  (err) => {
    console.log("err:", err.errors); // err: [ 222, 333, 111 ]
  }
);
// HxPromise.race([p1, p2, p3]).then(
//   (res) => {
//     console.log("res:", res);
//   },
//   (err) => {
//     console.log("err:", err);
//   }
// );
