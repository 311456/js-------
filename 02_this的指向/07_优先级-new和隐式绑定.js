const obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

// new 优先级高于隐式绑定
// var fn = new obj.foo(); // foo

function bar() {
  console.log(this);
}
var obj2 = {
  name: "aaa",
  bar: bar.bind("bbb"),
};
// new 优先级高于 bind
var fn2 = new obj2.bar(); // bar

var bar2 = bar.bind("ccc");
var obj3 = new bar2(); // bar
