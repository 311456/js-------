// 空值合并运算符 ??
const str = "";
// || 判断会有误差，如果str为空字符串或者0，时，判断不准确
const res = str || "default value";
const res2 = str ?? "default value";
console.log(res); // default value
console.log(res2); // ""
