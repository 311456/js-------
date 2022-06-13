// slice  返回一个新数组，不修改原数组。纯函数
// splice  返回被删除的数据组成的数组。会修改原数组。
var nums = [1, 3, 4, 5, 7, 3, 5, 6];

let arr = nums.slice(0, 5);
console.log(arr); // [1, 3, 4, 5, 7]

let arr2 = nums.splice(3);
console.log(arr2); // [ 5, 7, 3, 5, 6 ]
console.log(nums); // [1, 3, 4]
