function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(1, 4, 5)); // 10

// 函数柯里化
function sum2(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
console.log(sum2(3)(2)(4)); // 9

// 箭头函数式的柯里化
var sum3 = (x) => (y) => (z) => {
  return x + y + z;
};
console.log(sum3(4)(3)(2)); // 9

var sum4 = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z;
    };
  };
};
console.log(sum4(3)(4)(5)); // 12
