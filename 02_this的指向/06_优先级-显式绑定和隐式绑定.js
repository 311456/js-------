const obj = {
  name: "obj",
  foo: function () {
    console.log(this);
  },
};

// 1.call/apply > 隐式绑定
obj.foo.apply("aaa"); //aaa
obj.foo.call("aaa"); //aaa

// 2.bind > 隐式绑定
function zz() {
  console.log(this);
}
const obj2 = {
  name: "obj2",
  foo: zz.bind("aaa"),
};
obj2.foo(); // aaa
