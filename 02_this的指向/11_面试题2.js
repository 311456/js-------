var name = "window";
var person1 = {
  name: "person1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },

  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};

var person2 = { name: "person2" };

person1.foo1(); // person1 隐式绑定
person1.foo1.call(person2); // person2 显式绑定

person1.foo2(); // window 箭头函数不绑定this，person1的大括号只是对象的声明，不是作用域。所以上层作用域是window
person1.foo2.call(person2); // window 箭头函数不绑定this，所以用call没用

person1.foo3()(); // window 独立函数调用
person1.foo3.call(person2)(); // window 独立函数调用
person1.foo3().call(person2); // person2 显式绑定

person1.foo4()(); // person1 上层作用域
person1.foo4.call(person2)(); // person2 修改了上层作用域的this
person1.foo4().call(person2); // person1 上层作用域
