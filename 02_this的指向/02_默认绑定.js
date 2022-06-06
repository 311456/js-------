//* 独立函数调用 ---> window
//! 1
function foo() {
  console.log(this);
}
foo(); //* window

//! 2
function foo1() {
  console.log("1", this); 
}
function foo2() {
  console.log("2", this); 
  foo1(); //* window
}
function foo3() {
  console.log("3", this); //* window
  foo2(); //* window
}
foo3();

//! 3
var obj = {
  foo: function () {
    console.log(this); 
  },
};
var fn = obj.foo;
fn(); //* window

//! 4
function foo() {
  console.log(this);
}
var obj = { foo };
var fn = obj.foo;
fn(); //* window

//! 5
function foo() {
  return function () {
    console.log(this);
  };
}
var fn = foo();
fn(); //* window
