console.log("main");

require("./aaa");
require("./bbb");

// 执行结果：同步执行（循环引用时采用深度优先算法）
// main
// aaa
// ccc
// ddd
// bbb

// 并且多次引用的模块只会加载一次