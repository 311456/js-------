// 在js中，对象的key值只能是string或者symbol

// 使用对象作为key值
const obj = {
  name: "har",
};
const obj2 = {
  name: "bbb",
};
const obj3 = {
  [obj]: "value-1111",
  [obj2]: "value-2222",
};
// 明明添加了2个元素，打印出来只有一个元素，为什么？
// 答案：使用对象作为key值时，后台会将对象转换为字符串然后再保存为key，
// 而对象转换为字符串后都是[object object]，所以后一个key值重复了，就将第一个元素覆盖了。
console.log(obj3); // { '[object Object]': 'value-2222' }
