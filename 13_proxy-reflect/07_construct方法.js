class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher {}

const obj = new Person("hhh", 78);
console.log(obj); // Person { name: 'hhh', age: 78 }

const obj2 = Reflect.construct(Person, ["har", 56], Teacher);
console.log(obj2); // Teacher { name: 'har', age: 56 }
