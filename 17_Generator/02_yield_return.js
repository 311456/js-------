// 区别：
// yield：控制执行的阶段，yield之后还可以继续执行下面的代码。（暂停）
// return：直接终止代码。（终止）
function* generatorFn() {
  const value1 = 11;
  console.log("value1：", value1);
  // yield 返回值是next返回对象的value值
  yield value1;

  const value2 = 22;
  console.log("value2：", value2);
  return value2;

  const value3 = 33;
  console.log("value3：", value3);
}
// 执行函数后返回一个生成器，通过该生成器函数来决定函数的执行阶段
const generator = generatorFn();
console.log("第一段返回值：", generator.next());
console.log("第二段返回值：", generator.next());
console.log("第三段返回值：", generator.next());

// 执行结果：
// value1： 11
// 第一段返回值： { value: 11, done: false }
// value2： 22
// 第二段返回值： { value: 22, done: true }
// 第三段返回值： { value: undefined, done: true }