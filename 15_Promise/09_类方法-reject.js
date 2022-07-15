// Promise.reject("err");
// // 相当于
// new Promise((resolve, reject) => {
//   reject("err");
// });

//! 注意，无论reject传入什么，都是一样的。都会将传入的作为reject的值返回
// const promise = Promise.reject("normal data");
const promise = Promise.reject(
  new Promise((resolve, reject) => {
    // resolve("new Promise resolve");
    reject("new Promise reject");
  })
); // err: Promise { 'new Promise resolve' }/err: Promise { <rejected> 'new Promise reject' }

promise
  .then((res) => {
    console.log("res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
