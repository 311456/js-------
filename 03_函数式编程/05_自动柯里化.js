function curryingFn(fn) {
  function curried(...args) {
    //! 1.判断得到的参数是否是全部
    if (args.length >= fn.length) {
      //^ 如果直接返回，则是独立函数调用，可能绑定的this就与原来的函数不同
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        //! 2.如果函数没有获取完毕，则迭代调用
        return curried.apply(this, [...args, ...args2]);
      };
    }
  }
  return curried;
}

function sums(x, y, z) {
  console.log(this);
  return x + y + z;
}

var newSums = curryingFn(sums);
// console.log(newSums(2)(3)(4));
// console.log(newSums(2, 3, 4));
// console.log(newSums(2)(3, 4));
// console.log(newSums(2, 3)(4));
console.log(newSums.call({ name: "aaa" }, 3, 4, 4));
