// 同步导入的。
import har from "./foo.js";

// 通过 import函数 异步导入。该函数返回值为 promise
import("./foo.js").then((res) => {
  console.log("res----:", res);
});

console.log(har);
// import.meta 是当前文件的路径。
console.log("import.meta----:", import.meta);