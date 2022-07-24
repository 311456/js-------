// 需求：后一次请求依赖前一次的请求结果。
// 第一次：url为 hhh
// 第二次：url为 hhh111
// 第三次：url为 hhh111222
// 。。。。
function request(url) {
  // 模拟网络请求
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
}
//! 1.promise回调 ----> 回调地狱问题
// request("hhh").then((res) => {
//   request(res + 111).then((res) => {
//     request(res + 222).then((res) => {
//       console.log(res);
//     });
//   });
// });
//! 2.promise返回值 ---->
// request("hhh")
//   .then((res) => {
//     return request(res + 111);
//   })
//   .then((res) => {
//     return request(res + 222);
//   })
//   .then((res) => {
//     console.log(res);
//   });
//! 3.promise+generator ---->
function* getData(request) {
  const res = yield request("hhh");
  const res1 = yield request(res + 111);
  const res2 = yield request(res1 + 222);
  console.log(res2);
}
const generator = getData(request);
generator.next().value.then((res) => {
  generator.next(res).value.then((res) => {
    generator.next(res).value.then((res) => {
      console.log(res);
    });
  });
});
// 优化以上代码，因为都是重复的代码，递归调用即可
function co(generatorFn) {
  const generator = generatorFn(request);
  function _recursion(res) {
    const result = generator.next(res);
    if (result.done) return result.value;
    result.value.then((res) => {
      _recursion(res);
    });
  }
  _recursion();
}
co(getData);
// 也可以使用tj大神的npm包---》co，使用方式: co(getData)

//! 4.async+await ---->
async function getData(requestFn) {
  const res = await requestFn("hhh");
  const res1 = await requestFn(res + 111);
  const res2 = await requestFn(res1 + 222);
  console.log(res2);
}
getData(request);
