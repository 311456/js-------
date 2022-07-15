const promise = new Promise((resolve, reject) => {
  console.log("Promise start-------"); // pending
  resolve("success"); // fulfilled
  reject("reject"); // rejected
});

promise.then(
  (res) => console.log(res),
  (err) => {
    console.log(err);
  }
); // success。因为先执行的resolve，所以状态为fulfilled
