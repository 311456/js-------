// 使用map重新格式化数组对象
var obj = [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

var obj1 = obj.map(function (item) {
    var o = {}
    o.key = Object.keys(item)[0]
    o.value = Object.values(item)[0]
    return o
})
console.log(obj1);
// console.log(["1", "2", "3"].map(function (item) { return parseInt(item) }))
// [{ key: '1', value: 10 },{ key: '2', value: 20 },{ key: '3', value: 30 }]