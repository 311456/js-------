const obj = {
  name: "hhh",
  age: 16,
};
const res = Object.entries(obj);
console.log(res); // [[ 'name', 'hhh' ],[ 'age', 16 ]]

// 索引值，值
const res2 = Object.entries(["a", "b", "c"]);
console.log(res2); // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]

const res3 = Object.entries("gfsj");
console.log(res3); // [ [ '0', 'g' ], [ '1', 'f' ], [ '2', 's' ], [ '3', 'j' ] ]
