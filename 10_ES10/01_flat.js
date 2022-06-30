const arr = [1, 3, [3, 4], [12, [34, 1, 45]]];
// ES10之前循环迭代;
function flatFn(arr) {
  let res = [];
  function _itearator(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Object.prototype.toString.call(arr[i]) !== "[object Array]") {
        res.push(arr[i]);
      } else _itearator(arr[i]);
    }
    return res;
  }
  return _itearator(arr);
}

const res = flatFn(arr);
console.log(res);

// ES10,传入的是遍历的深度
const res2 = arr.flat();
const res3 = arr.flat(2);
console.log(res2); // [ 1, 3, 3, 4, 12, [ 34, 1, 45 ] ]
console.log(res3); // [ 1,  3, 3,  4, 12, 34, 1, 45]
