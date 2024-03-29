function isObject(value) {
  if (typeof value !== null && typeof value === "object") return true;
}

/**
 * 将传入的数据进行深拷贝，返回一个新拷贝的值（递归拷贝，recursively）
 * @param {any} value
 * @returns new value
 */
function cloneDeep(value) {
  // 1.属性为对象或者数组的处理。
  let newObj = Array.isArray(value) ? [] : {};
  for (let key in value) {
    if (!isObject(value[key])) {
      newObj[key] = value[key];
    } else {
      // 2.如果是对象或数组就递归调用自身。
      newObj[key] = cloneDeep(value[key]);
    }
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
};

const newObj = cloneDeep(obj);
obj.info.name = "new info name";
console.log(newObj);
