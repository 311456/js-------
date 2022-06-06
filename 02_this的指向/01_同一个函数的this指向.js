function foo() {
  console.log(this);
}
// 1.直接调用
foo(); // window

// 2.对象方法调用
const obj = { foo };
obj.foo(); // {foo: ƒ}

// 3.apply调用
foo.apply("hhh"); // String {'hhh'}
