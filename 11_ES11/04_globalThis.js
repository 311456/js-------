// 在不同环境下获取全局对象的方式是不同的

// 浏览器
// console.log(window); // window
// console.log(this); // window

// node
// console.log(global);

// ES11 --- globalThis：不同环境下使用统一变量获取全局对象
console.log(globalThis);
