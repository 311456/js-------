const promise = new Promise((resolve, reject) => {
  // resolve("resolve");
  reject("reject");
});
promise
  .then((res) => {
    console.log("res--", res);
  })
  .catch((err) => {
    console.log("err---", err);
  })
  .finally(() => {
    // 没有返回值，即为undefined
    console.log("finally");
  });
