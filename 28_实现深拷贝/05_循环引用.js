function isObject(value) {
  if (typeof value !== null && typeof value === "object") return true;
}

/**
 * 将传入的数据进行深拷贝，返回一个新拷贝的值（递归拷贝，recursively）
 * @param {any} value
 * @returns new value
 */
function cloneDeep(value, weakMap = new WeakMap()) {
  // 5.处理set以及map类型(该方式实现的是浅拷贝，如果需要深拷贝，则将set、map进行遍历后，如果不为简单数据类型，则递归调用即可)
  if (value instanceof Set) {
    return new Set([...value]);
  }
  if (value instanceof Map) {
    return new Map([...value]);
  }
  // 4.symbol处理：symbol作为属性值(该方式旧对象和新对象的属性值不相等)
  if (typeof value === "symbol") {
    return Symbol(value.description);
  }

  // 3.函数处理，如果属性是一个函数，则直接返回。函数本身就是可以复用的。(同下判断)
  // if (typeof value === "function") return value;

  if (!isObject(value) || typeof value === "function") {
    // 1.处理基本数据以及函数、symbol
    return value;
  }
  // 6.解决循环引用
  if (weakMap.has(value)) {
    return weakMap.get(value);
  }
  let newObj = Array.isArray(value) ? [] : {};
  weakMap.set(value, newObj);
  for (let key in value) {
    // 2.如果是对象或数组就递归调用自身。(传入weakmap是确保每一次拷贝是同一个weakmap)
    newObj[key] = cloneDeep(value[key], weakMap);
  }
  // 4.处理symbol为key的情况。因为普通遍历是遍历不到symbol作为key的属性的。
  const symbolKeys = Object.getOwnPropertySymbols(value);
  for (let skey of symbolKeys) {
    newObj[skey] = cloneDeep(value[skey], weakMap);
  }
  // 返回新生成的对象
  return newObj;
}

const obj = {
  name: "hhhxxx",
  age: 99,
  friends: ["aaa", "bbb", "ccc"],
  info: {
    name: "info",
    age: 99999,
  },
  foo: function (aaa) {
    return "foo fn";
  },
  [Symbol("aaa")]: { name: "aaa symbol" },
  bbb: Symbol("bbb"),
  set: new Set(["sss", "eee", "ttt"]),
  map: new Map([
    ["111", "mmm"],
    ["222", "aaa"],
    ["333", "ppp"],
  ]),
};
obj.circle = obj;

const newObj = cloneDeep(obj);
obj.info.name = "new info name";
console.log(newObj);
console.log(obj.bbb === newObj.bbb);
console.log(newObj.circle.circle.circle.name);
