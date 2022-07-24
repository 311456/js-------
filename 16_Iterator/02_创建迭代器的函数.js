// 创建迭代器的函数
function createArrayIterator(arr) {
  let index = 0;
  const iterator = {
    next: function () {
      if (index < arr.length) {
        return { done: false, value: arr[index++] };
      } else {
        return { done: true, value: undefined };
      }
    },
  };
  return iterator;
}
const names = ["aaa", "bbb", "ccc"];
const namesIterator = createArrayIterator(names);
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

const letters = ["a", "b", "c", "d"];
const lettersIterator = createArrayIterator(letters);
console.log(lettersIterator.next());
console.log(lettersIterator.next());
console.log(lettersIterator.next());
console.log(lettersIterator.next());
console.log(lettersIterator.next());

// 一个无限的迭代器
function createinfiniteIterator() {
  let index = 0;
  return {
    next: function () {
      return { done: false, value: index++ };
    },
  };
}
const numIterator = createinfiniteIterator()
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());