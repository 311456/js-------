function* generatorFn() {
  const value1 = 11;
  console.log("value1：", value1);
  try {
    yield value1;
  } catch (err) {
    console.log("throw error:", err);
    // yield 999999;
  }

  const value2 = 22;
  console.log("value2：", value2);
  yield value2;

  const value3 = 33;
  console.log("value3：", value3);
}
const generator = generatorFn();
console.log("第一段返回值：", generator.next());

// 应用场景：第一次执行获得的返回值不是我们想要的，我们就可以终止该函数的执行，就可以使用throw
console.log("第二段返回值：", generator.throw("throw message"));

console.log("第三段返回值：", generator.next());
