var inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

var o = inventory.find(function (item) {
    return item.name === "bananas"
})

console.log(o);
// { name: 'bananas', quantity: 0 }


// 查找数组中的第一个质数
function isPrime(element) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        // 可以被整除
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
