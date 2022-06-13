// 使函数的功能尽可能单一
function sums(x) {
  // 处理x的相关逻辑
  x = x + 4;
  return function (y) {
    y = y * y;
    return function (z) {
      return x + y + z;
    };
  };
}
