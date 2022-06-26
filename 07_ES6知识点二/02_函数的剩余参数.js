function foo(m, n, ...args) {
  console.log(m, n, ...args);
  console.log(args);
}
foo(3, 5, 7, 8, 4, 7, 8); // 3 5 7 8 4 7 8  , [ 7, 8, 4, 7, 8 ]
// 1.剩余参数是一个数组
// 2.剩余参数必须放在最后 (rest 参数必须是参数列表中的最后一个参数)
