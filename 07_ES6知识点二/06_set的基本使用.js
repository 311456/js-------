//! 基本使用
const set = new Set([4, 5, 3, 7, 3]);
console.log(set); // Set(4) { 4, 5, 3, 7 }
//! 属性
console.log(set.size); // 4

//! 方法
console.log(set.add(99)); // Set(5) { 4, 5, 3, 7, 99 }

set.delete(3); // 返回Boolean值
console.log(set); // Set(4) { 4, 5, 7, 99 }

console.log(set.has(7)); // true

// set.clear();
// console.log(set); // Set(0) {}

//! set遍历
set.forEach((item) => console.log(item));
for (let item of set) {
  console.log("for of ---", item);
}

//! 注意事项
set.add(22);
set.add(22);
console.log(set); // 只有一个22

set.add({});
set.add({});
// 因为对象的地址值不同，所以是不同的元素
console.log(set); // Set(7) { 4, 5, 7, 99, 22, {}, {} }
