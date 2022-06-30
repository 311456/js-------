const obj = {
  name: "hhhh",
  age: 12,
};
const res = Object.entries(obj);
console.log(res); // [ [ 'name', 'hhhh' ], [ 'age', 12 ] ]

// 将entries转换为对象(ES10之前)
function entries2obj(entries) {
  let obj = {};
  for (const item of entries) {
    obj[item[0]] = item[1];
  }
  return obj;
}
console.log("es10之前：", entries2obj(res));

// ES10
const obj2 = Object.fromEntries(res);
console.log("fromEntries：", obj2);

// 应用场景
const queryString = "name=hha&age=78&height=177";
const queryParams = new URLSearchParams(queryString);
console.log(queryParams); // URLSearchParams { 'name' => 'hha', 'age' => '78', 'height' => '177' }

// 将查询字符串转换为对象
console.log(Object.fromEntries(queryParams)); // { name: 'hha', age: '78', height: '177' }
