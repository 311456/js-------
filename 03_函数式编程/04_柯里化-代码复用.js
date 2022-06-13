// 代码复用
function adder(count) {
  return function (num) {
    return count + num;
  };
}

var adder5 = adder(5);
console.log(adder5(7));
console.log(adder5(6));

var adder10 = adder(10);
console.log(adder10(7));
console.log(adder10(10));
