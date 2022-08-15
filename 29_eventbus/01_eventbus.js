class HxEventBus {
  constructor() {
    this.eventBus = {};
  }
  // 1.监听事件
  on(eventName, eventCb, thisArg) {
    // 还需要对传入的参数进行edge case判断。
    let handlers = this.eventBus[eventName];
    // 事件第一次监听，则进行数据初始化。
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    // 初始化后将对呀的事件响应函数以及this进行保存。
    handlers.push({ eventCb, thisArg });
  }
  // 2.取消监听
  off(eventName, eventCb) {
    let handlers = this.eventBus[eventName];
    if (!handlers) return;
    // 不直接操作原属性
    const newHandlers = [...handlers];
    for (let i = 0; i < newHandlers.length; i++) {
      if (newHandlers[i].eventCb === eventCb) {
        const index = handlers.indexOf(newHandlers[i]);
        handlers.splice(index, 1);
      }
    }
  }
  // 3.发射事件
  emit(eventName, ...payload) {
    let handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach((handler) => {
      // 调用对应事件的处理函数，并且绑定对应的this。
      handler.eventCb.apply(handler.thisArg, payload);
    });
  }
}

// main.js
const eventBus = new HxEventBus();

// father.js
// 处理函数
function eventCallback(...payload) {
  console.log("监听事件 event1------1", "this---", this, payload);
}
// 监听事件
eventBus.on("event1", eventCallback, { name: "bindthis" });
eventBus.on(
  "event1",
  function (...payload) {
    console.log("监听事件 event1------2", "this---", this, payload);
  },
  { name: "other bindthis" }
);

// son.js
// 发射事件
eventBus.emit("event1", { payload: "this is any parameter" });

// 取消指定事件的处理函数
eventBus.off("event1", eventCallback);
eventBus.emit("event1", { payload: "this is any parameter" }, "556656");
