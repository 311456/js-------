const name = "hhh";
const age = 18;
console.log("my name is " + name, ", my age is " + age);
// 模板字符串基本使用
console.log(`my name is ${name} , my age is ${age}`);

// 使用表达式
console.log(`my name is ${name} , my age is ${age + 7}`);

// 调用函数
function sum(n1, n2) {
  return n1 + n2;
}
console.log(`56 add 90 is ${sum(56, 90)}`);
