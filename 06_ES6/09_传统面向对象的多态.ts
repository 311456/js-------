// 传统面向对象的多态满足的条件
// 1.必须有继承
// 2.必须重写父类的方法
// 3.父类引用指向子类实例 shape.getArea() ---> c.getArea()
class Shape {
  getArea() {
    return "shape";
  }
}
class Circle extends Shape {
  getArea() {
    return "circle";
  }
}
class Rectangle extends Shape {
  getArea() {
    return "rectangle";
  }
}

function createMixin(shape: Shape) {
  console.log(shape.getArea());
}

var c = new Circle();
var r = new Rectangle();

// 多态的体现形式
createMixin(c); // circle
createMixin(r); // rectangle

// 避免作用域函数或变量重名
export {};
