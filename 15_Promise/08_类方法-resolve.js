Promise.resolve("hello");
// 等价于
new Promise((resolve, reject) => {
  resolve("hello");
});

// Promise.resolve也可以传入三种类型的参数
// 1.传入普通数据
// const promise = Promise.resolve("normal data");
// 2.传入promise
// const promise = Promise.resolve(
//   new Promise((resolve, reject) => {
//     resolve("new Promise resolve");
//   })
// );
// 3.传入实现then方法的对象
const promise = Promise.resolve({
  then: function (resolve, reject) {
    resolve("obj then");
  },
});

promise.then((res) => {
  console.log(res);
});
