const pWeakSet = new WeakSet();
class Person {
  constructor() {
    pWeakSet.add(this);
  }
  eating() {
    if (!pWeakSet.has(this))
      throw new Error("不能通过person实例对象之外的对象调用eating方法");
    console.log("eating");
  }
}
const p = new Person();
p.eating(); // eating
p.eating.call({ name: "hhh" }); // error
