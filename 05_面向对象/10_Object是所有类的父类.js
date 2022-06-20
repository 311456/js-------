function Person() {}
// Person是函数，所以有prototype属性
console.log(Person.prototype); // {}

// 还有constructor属性，该属性是不可枚举的，所以正常打印打印不出来
console.log(Object.getOwnPropertyDescriptors(Person.prototype));

// 原型对象是一个对象，所以就有[[prototype]]属性
// 依次往上查找发现其最顶层的原型对象为Object.prototype
console.log(Person.prototype.__proto__); //[Object: null prototype] {}

// 顶层的__proto__属性已经置为null了，所以不能再继续往上查找了
console.log(Person.prototype.__proto__.__proto__); // null
