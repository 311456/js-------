// esmodule导入
// import { name, age } from "./foo";

// commonjs 导入
const { name, age } = require("./foo.js");

console.log(name, age);
// 打包时不压缩代码命令：npx webpack --mode=development
