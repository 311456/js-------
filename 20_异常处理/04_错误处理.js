function foo() {
  throw new Error("err message");
}
function bar() {
  // 2.
  try {
    foo();
  } catch (error) {
    // ES10 之后，catch 后的（err）可以省略不写
    console.log("catch err-----", error.message);
  } finally {
    console.log(
      "try catch finally:不管是否捕获到错误都会调用。一般服务器端用的较多，比如关闭连接的操作"
    );
  }
  console.log("错误被捕获后，后续代码依然执行！");
}
function test() {
  bar();
}
function demo() {
  test();
}
// 1.不处理：错误就会依次向外抛出，直到最顶层调用
// 2.try catch finally 捕获
demo();
