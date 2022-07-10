function requestErr(url) {
  setTimeout(() => {
    if (!url) {
      // 因为setTimeout是异步执行的，所以在setTimeout里面返回的结果并不能同步到reques函数返回的结果
      return "success";
    } else {
      return "failure";
    }
  }, 3000);
}

const res = requestErr("jk");
console.log(res); // undefined

// 解决的方式，通过执行回调来反馈执行结果
function request(url, successCb, failCb) {
  setTimeout(() => {
    if (url) {
      successCb("success");
    } else {
      failCb("failure");
    }
  }, 3000);
}

request(
  "correct",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

//! 缺点：回调函数没有统一规范，不同人有不一样的写法，所以在使用别人的东西时，学习成本很高。
