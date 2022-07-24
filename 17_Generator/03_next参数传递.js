function* generatorFn(oneStepParam) {
  const value1 = 10 * oneStepParam;
  const m = yield value1;

  const value2 = 20 * m;
  const n = yield value2;

  yield n;
}
const generator = generatorFn(2);
console.log(generator.next());
console.log(generator.next(3)); // m
console.log(generator.next(4)); //n
console.log(generator.next());
