function foo() {
  var name = "hhh"
  var age = 128

  function bar() {
    console.log(name);
    console.log(age);
  }
  return bar
}

var fn = foo()
fn()