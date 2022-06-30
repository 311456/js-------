const finalRegis = new FinalizationRegistry((value) => {
  console.log("数据被销毁", value);
});

let obj = { name: "obj" };
// 强引用，数据不会被销毁
// const info = obj;

const info = new WeakRef(obj);
// 获取weakRef的值
console.log(info.deref()); // {name: 'obj'}

finalRegis.register(obj, "obj");

obj = null; // 数据被销毁 obj

// 弱引用，所以在源对象被销毁时，info也跟着销毁了
console.log(info); // WeakRef {}
