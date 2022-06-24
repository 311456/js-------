class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log("running");
  }
}

class Student extends Person {
  constructor(name, age, sno) {
    // 传递参数给父类，初始化子类继承的属性
    super(name, age);
    this.sno = sno;
  }
  studying() {
    console.log("studying");
  }
}

//! 转换后
("use strict");
// 类型判断，边界判断的
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
/**
 * 将子类的prototype指向父类创建出的实例对象，实现继承的目的
 * @param {function} subClass 子类（Student）
 * @param {function} superClass 父类（Person）
 */
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  // 以下操作同寄生组合式继承的实现
  // 将子类的原型对象指向父类创建的实例，并将子类原型对象的constructor手动指向自身
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });

  Object.defineProperty(subClass, "prototype", { writable: false });
  // 实现父类静态属性的继承
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/**
 *父类静态属性的继承
 * 所做的事情：子类.__proto__ = 父类。即Student.__proto__ = Person
 * 因为静态属性的调是可以直接通过类名来调用
 * @param {function} o 子类
 * @param {function} p 父类
 * @returns
 */
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
/**
 * 通过父类创建
 * @param {function} Derived 派生类，即子类
 * @returns 返回一个父类实例，但是其原型上的constructor指向子类
 */
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      // Super：Person
      // arguments：参数
      // NewTarget：Student
      var NewTarget = _getPrototypeOf(this).constructor;
      //! Reflect所作的事情：通过Super创建一个实例，然后将这个实例的原型的constructor指向NewTarget，然后将该实例返回
      // 即：通过Person创建一个实例，然后将这个实例的原型的constructor指向Student
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
// 边界判断
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
// 边界判断
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
// 判断是否支持Reflect
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
// 返回__proto__属性
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
// 边界判断。class不能当作普通函数调用
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// 依次添加属性描述符
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
// 决定在哪里添加对应的属性
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

// Person类的定义
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);
    this.name = name;
    this.age = age;
  }
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

var Student = /*#__PURE__*/ (function (_Person) {
  // _Person是传递进来的Person
  //! 将子类的prototype指向父类的实例对象
  _inherits(Student, _Person);
  //! 获取父类实例
  var _super = _createSuper(Student);

  function Student(name, age, sno) {
    var _this;

    _classCallCheck(this, Student);

    // 传递参数给父类，初始化子类继承的属性
    //! 相当于Person.call(this,name,age)
    // 为什么不直接调用Person呢？因为有做限制，不能让类当作普通函数调用。
    _this = _super.call(this, name, age);
    _this.sno = sno;
    return _this;
  }

  _createClass(Student, [
    {
      key: "studying",
      value: function studying() {
        console.log("studying");
      },
    },
  ]);
  return Student;
})(Person);
