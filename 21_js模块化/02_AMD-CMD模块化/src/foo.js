//! AMD
define(function () {
  const name = "hxxx";
  const age = 67;
  function sum(n1, n2) {
    return n1 + n2;
  }
  return {
    name,
    age,
    sum,
  };
});

//! CMD
// define(function (require, exports, module) {
//   const name = "hxxxx";
//   const age = 88;
//   function sum(n1, n2) {
//     return n1 + n2;
//   }
//   // 导出方式一：
//   // exports.name = name;
//   // 导出方式二：
//   module.exports = {
//     name,
//     age,
//     sum,
//   };
// });
