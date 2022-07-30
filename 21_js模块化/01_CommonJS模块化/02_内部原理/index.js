// require函数内部实际就是: return module.exports
const test = require("./aaa");

console.log("index.js----name:", test.name);

setTimeout(() => {
  // 在 aaa.js 文件中修改了info.name属性，test也会被改变。
  // 说明：test和info指向的是同一个对象。因为将info赋值给了module.exports，所以三者相等。
  // console.log("update name:", test.name);

  // 修改test的值验证是否为同一对象（不推荐修改引入的值）
  test.age = 99999999;
}, 2000);
