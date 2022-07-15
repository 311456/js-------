/**
 * 1.传入普通的值或者对象
 *  返回的就是传入的东西
 * 2.传入Promise
 *  状态移交给传入的Promise决定
 * 3.有实现then方法的对象
 *  状态移交then方法决定
 */

// 普通的对象或值
// const promise = new Promise((resolve, reject) => {
//   // resolve("normal");
//   reject(44);
// });
// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// 传入Promise
// const promise = new Promise((resolve, reject) => {
//   resolve(
//     new Promise((resolve, reject) => {
//       // 由内部的promise决定状态
//       reject("rejected");
//     })
//   );
// });
// promise.then(
//   (res) => {
//     console.log("res----", res);
//   },
//   (err) => {
//     console.log("err----", err);
//   }
// ); // err---- rejected

// 传入实现了then的对象
const promise = new Promise((resolve, reject) => {
  resolve({
    then: (resolve, reject) => {
      reject("reject");
    },
  });
});
promise.then(
  (res) => {
    console.log("res----", res);
  },
  (err) => {
    console.log("err----", err);
  }
); // reject
