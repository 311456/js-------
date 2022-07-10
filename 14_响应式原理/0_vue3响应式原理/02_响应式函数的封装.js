// 1.收集依赖的数组
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
}

const obj = {
  name: "hhh",
  age: 56,
};
// 2.添加依赖到数组中
watchFn(function () {
  console.log(obj.name, "-------0");
  console.log(obj.name, "-------1");
  console.log(obj.name, "-------2");
});
watchFn(function () {
  console.log(obj.name, "other");
});

watchFn(function () {
  console.log(obj.age, "----age");
});

// 3.监听到变化就执行收集的依赖
obj.name = "xxx";
obj.age = 9999;

reactiveFns.forEach((fn) => fn());

//! 缺点：
// 1.对依赖的管理太过宽泛，所有对象的所有属性的依赖都在一个数组中
// 2.当其中一个属性变化时，其他的属性依赖也会执行
// 3.不能自动监听对象变化
