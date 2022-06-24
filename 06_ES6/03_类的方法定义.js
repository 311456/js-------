class Person {
  constructor(name) {
    this.name = name;
    this._address = "成都市";
    // 1.类的实例方法定义（在对象本身）
    this.hhh = function () {
      console.log("default method");
    };
  }

  // 2.类的原型方法定义（在原型对象上）
  eating() {
    console.log(this.name + "  eating");
  }

  // 3.类的访问器方法定义（为了隐藏或者限制某些属性而向外部暴露的接口）
  get address() {
    console.log("访问_address属性拦截");
    return this._address;
  }
  set address(newValue) {
    console.log("修改_address属性拦截");
    this._address = newValue;
  }

  // 4.静态属性（直接通过类名访问：Person.methodName）
  static createRandomPerson() {
    // 随机的操作
    return new Person("randomName");
  }
}

var p = new Person("hhh");
console.log(p); // Person { name: 'hhh', _address: '成都市', hhh: [Function (anonymous)] }
// console.log(Object.getOwnPropertyDescriptors(Person.prototype)); // constructor eating address
p.hhh(); // default method

p.eating(); // hhh  eating

console.log(p.address); // 访问_address属性拦截 成都市
p.address = "北京市"; // 修改_address属性拦截
console.log(p);
var p2 = new Person("bbb")
console.log(p2);

console.log(Person.createRandomPerson()); // name:"randomName" ...
