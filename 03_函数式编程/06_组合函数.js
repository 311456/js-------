// 依次为某一数据自动依次调用函数
function double(count) {
  return count * 2;
}
function square(count) {
  return count ** 2;
}
function compose(...fns) {
  var length = fns.length;
  // 1.判断传入的是否是函数
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== "function") {
      throw new TypeError(`${fns[i]} is not a function`);
    }
  }
  // 2.依次对某一数据调用函数
  function newCompose(...args) {
    var index = 0;
    // 如果没有传入函数，则直接将要操作的数据返回
    var result = length ? fns[index].apply(this, args) : args;
    while (++index < length) {
      result = fns[index].call(this, result, args);
    }
    return result;
  }
  return newCompose;
}

var newhh = compose(double, square);
console.log(newhh(4)); // 64
