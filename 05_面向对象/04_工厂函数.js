// 缺点：工厂模式创建出来的对象类型太宽泛，都为 object
function Person(name, age) {
  var p = {};
  p.name = name;
  p.age = age;
  return p;
}
var p1 = Person("hhh", 11);
var p2 = Person("aaa", 15);
console.log(p1, p2); //{ name: 'hhh', age: 11 } { name: 'aaa', age: 15 }
console.log(Array.prototype.toString.call(p1)); // object
