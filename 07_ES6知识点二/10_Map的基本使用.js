//! 创建
const map = new Map();
const map2 = new Map([
  [{ mark: "aaa" }, "value-111"],
  [{ name: "bbb" }, "value-222"],
]);
// console.log(map, map2);
// 可以将对象作为对象的key值
const obj = {
  name: "har",
};
map.set(obj, "value-111");
// console.log(map); // Map(1) { { name: 'har' } => 'value-111' }

//! 属性：size
console.log(map.size); // 1

//! 方法：set(key,value)、get(key)、has(key)、delete(key)、clear()
map.set({ name: "nnn" }, "value-333");
map.set(44, "value-444");
console.log(map); // Map(3) ......

console.log(map.get(obj)); // value-111

console.log(map.has(44)); // true

map.delete(44);
console.log(map); // Map(2) ......

// map.clear();
// console.log(map); // Map(0) {}

//! 遍历
map.forEach((value, key) => {
  console.log(value, key);
});

for (const item of map) {
  console.log(item);
  console.log(item[0], item[1]);
}
for (const [key, value] of map) {
  console.log(key, value);
}
