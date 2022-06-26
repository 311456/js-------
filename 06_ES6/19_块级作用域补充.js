for (let i = 0; i < 4; i++) {
  console.log(i);
}
// 等价于
{
  let i = 0;
  // i++的操作
  console.log(i);
}

{
  let i = 1;
  // i++的操作
  console.log(i);
}
// 如果换成const i，因为有i++操作，所以就会报错

const names = ["aa", "bb", "cc"];
for (const item of names) {
  console.log(item);
}
{
  const item = "aa";
  console.log(item);
}
{
  const item = "aa";
  console.log(item);
}
// 每一个块都是新的作用域，并且没有重新赋值的操作。
