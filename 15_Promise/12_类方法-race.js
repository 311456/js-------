const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
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

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("final res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });

// 执行结果：err: 2222
