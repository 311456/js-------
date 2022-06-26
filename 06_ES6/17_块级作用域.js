// 对于 ES6 的块级作用域
// 对 let const function class 声明的类型有效

{
  let foo = "foo";
  function bar() {}
  class Person {}
}
console.log(foo); //Uncaught ReferenceError: foo is not defined

// 函数不会报错。不同浏览器有不同的实现
// 因为浏览器在实现的时候，为了兼容以前的写法，对function做了特殊得处理
bar(); 

var p = new Person(); // Uncaught ReferenceError: Person is not defined
