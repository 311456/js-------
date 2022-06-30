const arr = [1, 3, [3, 4]];
const res = arr.flatMap((item) => {
  console.log(item);
});
const res2 = arr.map((item) => console.log(item));

// 应用场景
const arr2 = ["hello world", "ni hao", "kuai le"];
const res3 = arr2.flatMap((item) => {
  return item.split(" ");
});
// 1.先执行map操作
// 2.再执行flat(1)操作
console.log(res3); // [ 'hello', 'world', 'ni', 'hao', 'kuai', 'le' ]

const res4 = arr2.map((item) => {
  return item.split(" ");
});
console.log(res4); // [ [ 'hello', 'world' ], [ 'ni', 'hao' ], [ 'kuai', 'le' ] ]
