class CreateIteratorObj {
  constructor(name, age) {
    this.info = [name, age];
  }
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.info.length) {
          return { done: false, value: this.info[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        // 迭代器的中断
        console.log("迭代器提前终止了");
        return { done: true };
      },
    };
  }
}
// p1:可迭代对象
const p1 = new CreateIteratorObj("hhh", 78);
// 迭代器
const iterator1 = p1[Symbol.iterator]();
console.log(iterator1.next());

for (let item of p1) {
  console.log(item);
  if (item === "hhh") return;
}
