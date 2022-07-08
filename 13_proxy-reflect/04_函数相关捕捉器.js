function foo(...args) {
  console.log(...args);
}

const proxyFn = new Proxy(foo, {
  // thisArg:this
  // args:函数参数
  apply(target, thisArg, args) {
    console.log("apply");
    target.apply(thisArg, args);
  },
  construct(target, args) {
    console.log("new");
    return new target(...args);
  },
});

proxyFn.apply({ name: "hhh" }, [2, 4, 6]);
const fn = new proxyFn(3, 6, 7);
