const str = '{"name":"hxxx","age":99999999,"firends":["aaa","bbb"]}';

//! 1.JSON.parse 将json格式的数据进行还原
const obj = JSON.parse(str);
console.log(obj);

//! 2.参数二reviver：拦截
const obj2 = JSON.parse(str, (key, value) => {
  if (key === "name") {
    return "new name";
  }
  return value;
});
console.log(obj2);
