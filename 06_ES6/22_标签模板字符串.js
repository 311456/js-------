const name = "hhh";
const age = 56;
/**
 * 使用标签模板字符串调用时
 * @param {Array} a 一个数组，包含除变量外的所有字符串
 * @param {*} b 第一个变量的值
 */
function log(a, b) {
  console.log(a, "-----", b);
}
// 标签模板字符串
log``; // [ '' ] ----- undefined

log`hello world`; // [ 'hello world' ] ----- undefined

//! 如果变量在最前面或者最后面，则其位置将会有一个空字符串
log`hello${name}world${age}`; // [ 'hello', 'world', '' ] ----- hhh

log`${age + 7}hello`; // [ '', 'hello' ] ----- 63

//! 开发中一般不会用到，但是react中编写样式时会用到这种写法 