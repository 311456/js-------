// // 箭头函数没有arguments，如果在里面使用了该参数，会从上层作用域去查找

// function foo() {
//   // 该参数是一个类数组对象
//   console.log(arguments);
//   // 将类数组转换为数组
//   // 方式一
//   var arr1 = Array.prototype.slice.call(arguments);
//   var arr11 = [].slice.call(arguments);
//   console.log(arr11);
//   // 方式二
//   var arr2 = Array.from(arguments);
//   console.log(arr2);
//   // 方式三
//   console.log([...arguments]);
// }
// foo(4, 5, 6, 78); // Arguments(4) [4, 5, 6, 78, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 实现 slice
Array.prototype.sliceFn = function (start, end) {
  var arr = this;
  var newArr = [];
  for (var i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

let arr1 = [1, 3, 5, 7].sliceFn(0, 3);
let arr2 = [1, 3, 5, 7].slice(0, 3);
console.log(arr1); //[ 1, 3, 5 ]
console.log(arr2);
