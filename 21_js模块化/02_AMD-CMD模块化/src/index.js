//! AMD
// 配置映射表
require.config({
  // 默认路径 为当前文件夹
  baseUrl: "",
  paths: {
    foo: "./src/foo",
    bar: "./src/bar",
  },
});
// 导入需要的模块，通过回调函数获取到模块
require(["foo", "bar"], function (foo, bar) {
  console.log("index--foo:", foo);
  console.log("index--bar:", bar);
});

//! CMD
// define(function (require, exports, module) {
//   const foo = require("./foo");
//   console.log("index:", foo);
// });
