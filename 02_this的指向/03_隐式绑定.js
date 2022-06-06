//! 隐式绑定 Object.fn() → Object

// 1
function foo() {
  console.log(this);
}
var obj = { foo };
obj.foo(); //obj

// 2
var obj = {
  name: "hhh",
  running: function () {
    console.log(this.name + "在跑步");
  },
};
obj.running(); // "hhh在跑步"

// 3
var obj1 = {
  foo: function () {
    console.log(this);
  },
};
var obj2 = {
  name: "xxx",
  foo: obj1.foo,
};
obj2.foo(); //obj2
