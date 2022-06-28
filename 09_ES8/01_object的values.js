const obj = {
  name: "hhh",
  age: 16,
  height: 1.78,
  weight: "54kg",
};
const res = Object.values(obj);
console.log(res); // [ 'hhh', 16, 1.78, '54kg' ]

const res2 = Object.values(["aa", "bb", "cc"]);
console.log(res2); // [ 'aa', 'bb', 'cc' ]
const res3 = Object.values("aqswde");
console.log(res3); // [ 'a', 'q', 's', 'w', 'd', 'e' ]
