// 1.String
const str = "str";
const strIterator = str[Symbol.iterator]();
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());

// 2.Array
const arr = ["aaa", "bbb", "ccc"];
const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

// 3.Set
const set = new Set(["11", "22", "33"]);
set.add("44");
for (let item of set) {
  console.log(item);
}
// 4.Map
// 5.arguments
function a() {
  for (let item of arguments) {
    console.log(item);
  }
}
a("aa", "hh", "gg");
