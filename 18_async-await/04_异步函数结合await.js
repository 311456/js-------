function request() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("request resolve");
    }, 2000);
  });
}

async function getData() {
  // 1.await默认跟表达式，该表达式一般返回promise
  const res = await request();
  console.log("res:", res);
  // await后面的代码相当于（必须等到await表达式有值才能继续执行）
  // Promise.then((res) => {
  //   console.log("res:", res);
  // });

  const res2 = await request();
  console.log("res2---:", res2);

  // 2.await 后跟普通值
  const res3 = await "res3333";
  console.log("res3", res3);

  // 3.await 后跟Promise
  const res4 = await new Promise((resolve, reject) => {
    // resolve("await promise resolve");
    reject("await promise reject");
  });
  console.log("res4:", res4);

  // 4.await 后跟thenable对象
  const res5 = await {
    then: (resolve, reject) => {
      //! 一旦有reject，便会作为整个异步函数的返回值
      reject("await thenable reject");
    },
  };
  console.log("res5:", res5);
}

console.log("js start");
getData()
  .then(
    (res) => {
      console.log("then res:", res);
    },
    (err) => {
      console.log("then err:", err);
    }
  )
  .catch((err) => {
    console.log("catch err:", err);
  });
console.log("js end");
