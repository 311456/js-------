function foo() {}
// 函数也是一个对象，所以也有 [[prototype]]
console.log(foo.__proto__);
// 函数还多出来一个属性：prototype(显示原型)
console.log(foo.prototype);
var p1 = new foo();
var p2 = new foo();

//绑定原型的操作是new操作符做的：将对象的隐式原型指向构造函数的显示原型
console.log(p1.__proto__ === foo.prototype); // true
console.log(p2.__proto__ === foo.prototype); // true
console.log(p1.__proto__ === p1.constructor.prototype); // true
