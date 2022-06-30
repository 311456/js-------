const finalRegis = new FinalizationRegistry((value) => {
  console.log("数据被销毁", value);
});

let obj = { name: "obj" };
let info = { name: "info" };

finalRegis.register(obj, "obj");
finalRegis.register(info, "info");

// 因为gc回收的时间是不固定的，所以不确定什么时候会回调，需要等待一定时间
obj = null; // 数据被销毁 obj
info = null; // 数据被销毁 info
