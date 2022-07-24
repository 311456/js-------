// 可迭代对象：有[Symbol.iterator]方法，且该方法返回一个迭代器。
const iterableObj = {
  names: ["aaa", "bbb", "ccc"],
  [Symbol.iterator]: function () {
    // console.log(this);
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};
// 因为调用时是隐式绑定，但是返回的迭代器是没有names属性的,
// 所以next函数需要写成箭头函数，不会绑定this，而让其去上层作用域([Symbol.iterator])查找this
// const iterator = iterableObj[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // 再次调用
// console.log("------------");
// const iterator1 = iterableObj[Symbol.iterator]();
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());

// for of 遍历，要求的就是可迭代对象。
for (let item of iterableObj) {
  // for of 本质其实就是next的语法糖
  // 0.调用next。获取返回值
  // 1.判断done是否为false，如果为false则将对应的value值返回
  // 2.如果为true，则遍历结束
  console.log(item);
}
const obj = {
  name: "hh",
  age: 18,
};
// 报错：obj is not iterable
// for (let item of obj) {
//   console.log(item);
// }
