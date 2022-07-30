const obj = {
  name: "hxxx",
  age: 45,
  firends: ["aaa", "bbb"],
  // toJSON: function () {
  //   return "obj toJSON";
  // },
};

//! 1.JSON.stringify ：将数据转换成 json 格式。
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);

//! 2.参数二replacer：指定要转换的属性
const jsonStr2 = JSON.stringify(obj, ["name", "age"]);
console.log(jsonStr2);

//! 2.2参数二replacer：拦截要转换的数据
const jsonStr3 = JSON.stringify(obj, (key, value) => {
  if (key === "age") {
    return 99999999;
  }
  return value;
});
console.log(jsonStr3);

//! 3.参数三place：指定缩进(number、string、undefined)
const jsonStr4 = JSON.stringify(obj, undefined, "~");
console.log(jsonStr4);

//! 4.如果要转换的数据有 toJSON 方法，那么该方法的返回值将作为stringify的返回值。