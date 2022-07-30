function foo() {
  throw new Error("err message");
}
function bar() {
  foo();
}
function test() {
  bar();
}
function demo() {
  test();
}
demo();

// 执行结果：
//! 错误类型：错误消息 
// Error: err message
//! js 调用栈 
    // at foo (d:\HTML5\TheGarbageProject\js高级-代码笔记\20_异常处理\03_调用栈解析.js:2:9)
    // at bar (d:\HTML5\TheGarbageProject\js高级-代码笔记\20_异常处理\03_调用栈解析.js:5:3)
    // at test (d:\HTML5\TheGarbageProject\js高级-代码笔记\20_异常处理\03_调用栈解析.js:8:3)
    // at demo (d:\HTML5\TheGarbageProject\js高级-代码笔记\20_异常处理\03_调用栈解析.js:11:3)
    //! node 会将js代码放到一个函数中执行，以下代码就是该函数 
    // at Object.<anonymous> (d:\HTML5\TheGarbageProject\js高级-代码笔记\20_异常处理\03_调用栈解析.js:13:1)
    //! node 内部调用的东西（比如初始化环境、编译等） 
    // at Module._compile (node:internal/modules/cjs/loader:1103:14)
    // at Object.Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    // at Module.load (node:internal/modules/cjs/loader:981:32)
    // at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    // at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)