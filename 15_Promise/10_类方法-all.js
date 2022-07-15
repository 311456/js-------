const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(3333);
  }, 3000);
});

Promise.all([p1, p2, p3, "aaa"])
  .then((res) => {
    console.log("final res:", res);
  })
  .catch((err) => {
    console.log("err:", err);
  });
