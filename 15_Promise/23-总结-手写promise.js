const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_REJECTED = "rejected";
function execteFnWithCatchErr(fn, value, resolve, reject) {
  try {
    const res = fn(value);
    if (res instanceof HxPromise) {
      res.then(resolve, reject);
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
          this.onFulfilledFns.forEach((fn) => fn(this.value));
        }, 0);
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          this.onRejectedFns.forEach((fn) => fn(this.reason));
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
    onFulfilled =
      onFulfilled ||
      ((res) => {
        return res;
      });
    onRejected =
      onRejected ||
      ((err) => {
        throw err;
      });
    return new HxPromise((resolve, reject) => {
      if (this.status === PROMISE_STATUS_FULFILLED) {
        execteFnWithCatchErr(onFulfilled, this.value, resolve, reject);
      }
      if (this.status == PROMISE_STATUS_REJECTED) {
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
    this.then(
      () => onFinally(),
      () => onFinally()
    );
  }
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
        promise.then((res) => {
          values.push(res);
          if (values.length === promises.length) resolve(values);
        }, reject);
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
            if (result.length === promises.length) resolve(result);
          },
          (err) => {
            result.push({ status: PROMISE_STATUS_REJECTED, reason: err });
            if (result.length === promises.length) resolve(result);
          }
        );
      });
    });
  }
  static race(promises) {
    return new HxPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject);
      });
    });
  }
  static any(promises) {
    const reasons = [];
    return new HxPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, (err) => {
          reasons.push(err);
          if (reasons.length === promises.length)
            reject(new AggregateError(reasons));
        });
      });
    });
  }
}
// 测试代码

//! 原来的promise
const originPromise = new Promise((resolve, reject) => {
  resolve("aa");
  // reject("bb");
  throw new Error("promise err");
});
//! 自己实现的promise
const promise = new HxPromise((resolve, reject) => {
  resolve("aa");
  // reject("bb");
  throw new Error("promise err");
});

//! 缺点：类方法all、allSettled、race、any还没有处理传入非HxPromise的情况
