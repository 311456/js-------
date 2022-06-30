const maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt); // 9007199254740991
// 可以表示，但是不一定正确
console.log(maxInt + 1); // 9007199254740992
console.log(maxInt + 2); // 9007199254740992

// bigInt表示方法，在数字后面加n即可
const bigInt = 9007199254740991789n;
// 同类型相加才可以运算
console.log(bigInt + 200n); // 9007199254740991989n

// 相互转换
const max2big = BigInt(maxInt);
console.log(max2big);
