const iteratorObj = {
  names: ["aaa", "bbb", "ccc"],
  [Symbol.iterator]: function () {
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
// 1.for of
for (let item of iteratorObj) {
  console.log(item);
}
// 2.展开语法
const names = ["ddd", "eee"];
const newArr = [...names, ...iteratorObj];
console.log(newArr);
const obj = {
  name: "hhh",
  age: 67,
};

// 疑问：对象不是不可迭代吗？为什么还可以使用展开语法？
// 答案：是ES9新增的特性，要求实现对象的展开运算和解构操作。不同浏览器有不同的实现。
// 自己实现的话可以使用entries。
const newObj = { ...obj };
console.log(newObj);

// 3.解构赋值
const [name1, name2] = names;
console.log("name1,name2-----", name1, name2);
const { name, age } = obj; // ES9新增特性，不是迭代器实现的

// 4.创建一些对象时：set、map等

// 5.一些语法的使用
console.log(Array.from(iteratorObj));

// 6.其他Api
Promise.all(iteratorObj).then((res) => {
  console.log(res);
});
