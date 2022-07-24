const s = new Date().getSeconds();

setTimeout(function () {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("执行回调所需时间：",new Date().getSeconds() - s,"秒");
}, 500);

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("js线程执行2秒之后，才会执行消息队列中的数据");
    break;
  }
}
