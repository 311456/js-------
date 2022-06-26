// 二进制 Binary
const b = 0b100;

// 八进制 Octal
const o = 0o100;

// 十进制 Decimal
const d = 100;

// 十六进制 Hexadecimal
const x = 0x100;

console.log(b, o, d, x); // 4 64 100 256

// 大数连接符，便于阅读 ---- ES2021新特性
const num = 100_000_000_000_000;
console.log(num); // 100000000000000
