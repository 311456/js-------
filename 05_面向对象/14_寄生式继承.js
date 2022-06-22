// 针对对象
var Person = {};

function createObj(constructorFn, name) {
  var obj = Object.create(constructorFn);
  obj.name = name;
  obj.eatting = function () {
    console.log("eatting");
  };
  return obj;
}
var stu = createObj(Person, "hhh");
console.log(stu);
// 缺点：这样创建的对象还是有很多重复的代码逻辑，比如studying