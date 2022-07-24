// 生成器函数
function* generatorFn() {
  const value1 = 11;
  console.log("value1：", value1);
  yield;

  const value2 = 22;
  console.log("value2：", value2);
  yield;

  const value3 = 33;
  console.log("value3：", value3);
}
// 直接执行函数并没有什么变化
generatorFn();
// 执行函数后返回一个生成器，通过该生成器函数来决定函数的执行阶段
const generator = generatorFn();

console.log("开始---------------");
generator.next();

console.log("---------------");
generator.next();

console.log("---------------");
generator.next();

console.log("结束---------------");
