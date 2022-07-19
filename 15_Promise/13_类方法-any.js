const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333);
  }, 3000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("final res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });

// 执行结果：final res: 3333
// 全为reject时，执行结果：err: [AggregateError: All promises were rejected]
// 错误信息通过 .errors 获取
