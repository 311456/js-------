const info = {
  name: "hxxx",
  age: 88,
  sum: function () {},
};

setTimeout(() => {
  // info.name = "new name";
  console.log("aaa.js----",info.age);
}, 3000);

module.exports = info;

// console.log(module.exports === info); // true
