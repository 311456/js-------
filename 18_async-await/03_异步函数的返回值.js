async function foo() {
  console.log("foo start");
  // throw new Error("foo err message");
  console.log("foo end");
  // 异步函数默认返回的是一个promise，如果没有返回值，默认为undefined。
  // 1.如果返回普通值，则作为promise的resolve值；
  // return "noirmal data"

  // 2.如果返回的是promise，则状态由返回的promise决定；
  // return new Promise((resolve, reject) => {
  //   reject("return reject mesg");
  // });

  // 3.如果返回的是实现了then方法的对象，则由then方法决定状态
  return {
    then: (resolve, reject) => {
      reject("obj then reject");
    },
  };
}
console.log("js start");
// 因为promise是异步执行，所以获取结果或者捕获错误是在最后才执行
foo()
  .then((res) => {
    console.log("then res----:", res);
  })
  .catch((err) => {
    console.log("catch err----:", err);
  });
console.log("js end");
