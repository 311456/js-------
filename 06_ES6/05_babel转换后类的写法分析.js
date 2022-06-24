class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log("running");
  }
}

//! 转换后
("use strict");
// edgeCase，边界判断。防止我们将类当作普通函数调用
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// 添加属性具体操作（封装成工具函数，便于重复使用）
function _defineProperties(target, props) {
  // 依次添加属性描述符
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
// 决定往哪里添加属性
function _createClass(Constructor, protoProps, staticProps) {
  // 普通属性就添加到原型对象上
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  // 静态属性就直接添加到本身
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

// /*#__PURE__*/ 纯函数（确定输入有确定没有副作用）
// 当webpack打包时，便于tree shaking
// 是一个立即执行函数，防止内部变量污染全局作用域
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);
    this.name = name;
    this.age = age;
  }

  // 在原型上添加属性的操作
  _createClass(Person, [
    {
      key: "running",
      value: function running() {
        console.log("running");
      },
    },
  ]);

  return Person;
})();
