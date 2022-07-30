const name = "hxxxx";
const age = 99;

//! 该写法用的很少。因为该写法的出现不过是为了满足CommonJS规范。
exports.name = name;
exports.age = age;

//! exports 的原理：因为exports指向了module.exports，所以在exports中添加数据也可以通过module.exports导出。
// module.exports = {};
// exports = module.exports;
// return module.exports;
//! 注意：最终导出的是module.exports，而不是exports。 