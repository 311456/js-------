function* generatorFn() {
  const value1 = 11;
  console.log("value1：", value1);
  yield value1;

  // 调用return方法相当于在此处：
  // return "return message"

  const value2 = 22;
  console.log("value2：", value2);
  yield value2;

  const value3 = 33;
  console.log("value3：", value3);
}
const generator = generatorFn();
console.log("第一段返回值：", generator.next());

// 通过调用生成器的return方法终止生成器的执行
console.log("第二段返回值：", generator.return("return message"));

console.log("第三段返回值：", generator.next());
