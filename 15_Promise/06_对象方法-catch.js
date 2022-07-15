const promise = new Promise((resolve, reject) => {
  //! reject和抛出错误都由catch进行捕获
  // 2者同时存在，会先执行前面的。区别就是rejetc之后仍然会执行后面的代码，而抛出错误之后代码就不会执行了
  reject("err-----");
  // throw new Error("defined err message");
  // console.log("end---");
  // resolve("--");
});
// 捕获错误
// promise.catch((err) => {
//   console.log(err);
// });

//! 2.catch的其他写法
// catch优先捕获promise对象的reject或错误，promise对象resolve时才会捕获then抛出的reject或错误
// promise
//   .then((res) => {
//     // return "then";
//     return new Promise((resolve, reject) => {
//       reject("then err");
//       // throw new Error("then err");
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! 3.返回值
promise
  .catch((err) => {
    return new Promise((resolve, reject) => {
      reject("catch err");
      // throw new Error("then err");
    });
  })
  .catch((err) => {
    console.log("catch2---", err);
  });
