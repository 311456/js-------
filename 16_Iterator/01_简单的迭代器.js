const names = ["aaa", "bbb", "ccc"];
let index = 0;

// 迭代器：是一个对象；满足迭代器协议。
const iterator = {
  // 迭代器协议：next方法，该方法返回一个形如{done:boolean,value:*}的对象
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: true, value: undefined };
    }
  },
};

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
