const weakMap = new WeakMap();
// weakMap.set("name", "har"); // TypeError: Invalid value used as weak map key

// 方法
const obj = { name: "hhh" };
weakMap.set(obj, "value-111");
weakMap.set({ name: "aaa" }, "value-222");
console.log(weakMap); // WeakMap { <items unknown> }

console.log(weakMap.get(obj)); // value-111

console.log(weakMap.has(obj)); // true

weakMap.delete(obj);
console.log(weakMap.has(obj)); // false
