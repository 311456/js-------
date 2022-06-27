const weakSet = new WeakSet();
// weakSet.add(10); // TypeError: Invalid value used in weak set

let obj = {
  name: "har",
};
weakSet.add(obj);
// 如果是使用set强引用，obj置为null后，因为还有set指向内存中的obj，所以内存中的obj不会被清除
// 使用weakset弱引用，置为空后，内存中的obj将会被GC进行回收
obj = null;
