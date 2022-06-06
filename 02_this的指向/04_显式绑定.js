// 手动绑定this，那么this就是我们绑定的对象

// 1.apply、call
function sum(n1, n2) {
  console.log(n1 + n2, this);
}
var obj = { name: "hhh" };
sum.call(obj, 20, 30); //50 obj
sum.apply(obj, [20, 30]); // 50 obj

// 2.bind，返回一个 绑定了this的新函数
function foo() {
  console.log(this);
}
var newFn = foo.bind("aaa");
newFn(); // "aaa"
newFn(); // "aaa"
newFn(); // "aaa"
