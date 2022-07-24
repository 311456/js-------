//! 1.案例一：数组迭代
function* createArrIterator(arr) {
  let index = 0;
  // 1.1：写法一
  // return {
  //   next: function () {
  //     if (index < arr.length) {
  //       return { done: false, value: arr[index++] };
  //     } else {
  //       return { done: true, value: undefined };
  //     }
  //   },
  // };

  // 1.2：写法二
  // yield arr[index++]
  // yield arr[index++]
  // yield arr[index++]

  // 1.3：写法三
  // for (let item of arr) {
  //   yield item;
  // }

  // 1.4：写法四(yield* 可迭代对象)。每次调用next后就会返回arr的迭代结果
  yield* arr;
}
// const names = ["aaa", "bbb"];
// const iterator = createArrIterator(names);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//! 案例二：一定范围类进行迭代
function* numGenerator(start, end) {
  let index = start;
  while (index < end) yield index++;
}
// const generator = numGenerator(10,14)
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//! 案例三：class迭代器案例
class CreateIteratorObj {
  constructor(name, age) {
    this.info = [name, age];
  }
  *[Symbol.iterator]() {
    yield* this.info;
  }
  // [Symbol.iterator]() {
  //   let index = 0;
  //   return {
  //     next: () => {
  //       if (index < this.info.length) {
  //         return { done: false, value: this.info[index++] };
  //       } else {
  //         return { done: true, value: undefined };
  //       }
  //     },
  //   };
  // }
}
const p = new CreateIteratorObj("xxx", 90);
const generator = p[Symbol.iterator]();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
