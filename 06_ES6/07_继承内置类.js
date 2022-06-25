// 继承内置类Array，并且进行相关扩展
class NewArray extends Array {
  lastItem() {
    return this[this.length - 1];
  }
}
var arr = new NewArray(3, 5, 7);
console.log(arr.lastItem()); // 7
