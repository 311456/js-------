Promise.resolve()
  .then(() => {
    console.log(0);
    // 1.普通值
    // return 4;
    // 2.thenable
    // return {
    //   then: function (resolve, reject) {
    //     resolve(4);
    //   },
    // };
    // 3.promise
    return Promise.resolve(4);
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

  // 1.普通值：0、1、4、2、3、5、6
  // return 4 时相当于 resolve(4)

  // 2.thenable：0、1、2、4、3、5、6
  // 担心在then函数里面会有大量复杂的计算，所以将微任务推迟一次。

  // 3.promise.resolve：0、1、2、3、4、5、6
  // promise.resolve(4) 添加到微任务中，推迟一次
  // 通过then获取执行结果又推迟一次