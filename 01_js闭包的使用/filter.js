var n1 = [12, 23, 54, 11, 23, 19]

// 筛选出所有大于19的值
var n11 = n1.filter(function (item) {
    return item > 19
})
console.log(n11);

// 根据查询条件筛选
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItem(query) {
    return fruits.filter(function (el) {
        // indexOf区分大小写,该函数返回第一个与查询字符串匹配到的索引值
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
}
console.log(filterItem("an"));

