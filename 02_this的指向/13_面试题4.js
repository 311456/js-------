var name = "window";
function Person(name) {
  this.name = name;
  this.obj = {
    name: "obj",
    foo1: function () {
      return function () {
        console.log(this.name);
      };
    },
    foo2: function () {
      return () => {
        console.log(this.name);
      };
    },
  };
}
var person1 = new Person("person1");
var person2 = new Person("person2");

person1.obj.foo1()(); // window 独立函数调用
person1.obj.foo1.call(person2)(); // window 独立函数调用
person1.obj.foo1().call(person2); // person2 显式绑定

person1.obj.foo2()(); // obj 上层作用域
person1.obj.foo2.call(person2)(); // person2 绑定了上层作用域
person1.obj.foo2().call(person2); // obj 上层作用域
