// 数组解构：按照顺序解构
var names = ["aaa", "bbb", "ccc"];
// 解构后的代码：
// var item1 = names[0],item2 = names[1],item3 = names[2];

// 1.基本解构
var [item1, item2, item3] = names;
console.log(item1, item2, item3); // aaa bbb ccc

// 2.解构后2个
var [, item4, item5] = names;
console.log(item4, item5); // bbb ccc

// 3.解构默认值
var [, , item6, item7 = "default"] = names;
console.log(item6, item7); // ccc default

// 4.解构一部分
var [item8, ...newArr] = names;
console.log(item8, newArr); // aaa [ 'bbb', 'ccc' ]
