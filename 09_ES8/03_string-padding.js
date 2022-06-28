// 字符串填充
var msg = "hello";
// 参数一：要填充到的位数
// 参数二：用于填充的字符串
console.log(msg.padStart(10, "-")); // -----hello
console.log(msg.padEnd(10, "-")); // hello-----
