var obj = {
  running: function () {
    console.log("obj running");
  },
};
class Person {
  running() {
    console.log("Person running");
  }
}

function createMixin(o) {
  o.running();
}
var p = new Person();

// 多态的体现形式
createMixin(p); // Person running
createMixin(obj); // obj running

//! 另外一个更加明显的例子
function sum(n1, n2) {
  return n1 + n2;
}
console.log(sum(10, 30)); // 40
console.log(sum("abg", "iki")); // abgiki
