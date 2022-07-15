// console.log(Promise.prototype);
// Promise对象方法：原型对象上的方法：constructor、then、catch
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
// Promise类方法：all、allSettled、any、race、resolve、reject
// console.log(Object.getOwnPropertyDescriptors(Promise));

const promise = new Promise((resolve, reject) => {
  resolve("resolve");
});

//! 1.同一个Promise对象可以多次调用then方法,互不干扰
promise.then((res) => {
  console.log("then res----", res);
});
promise.then((res) => {
  console.log("then res 22----", res);
});

//! 2.then的返回值 ：then本身是有返回值的，值为Promise（链式调用）
// 2.1：如果我们手动返回普通值，那么这个普通值将会被作为一个新的Promise的resolve值
promise
  .then((res) => {
    return 1111;
  })
  .then((res) => {
    console.log("res---", res); // res--- 1111
  });
// 2.2返回Promise，同理resolve参数
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      resolve("inter resolve");
    });
  })
  .then((res) => {
    console.log(res); // inter resolve
  });
// 2.3返回实现了then方法的对象
promise
  .then((res) => {
    return {
      then: function (resolve, reject) {
        resolve("obj then");
      },
    };
  })
  .then((res) => {
    console.log(res); // obj then
  });
