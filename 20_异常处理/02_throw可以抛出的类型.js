class HxError {
  constructor(errCode, errMsg) {
    this.errCode = errCode;
    this.errMsg = errMsg;
  }
}
function foo() {
  //! 1.抛出普通值
  // throw "err message"
  //! 2.抛出对象:可以携带更多的错误信息
  // throw {
  //   errCode: 1001,
  //   errMsg: "err msg",
  // };
  //! 3.抛出类:使用更加简洁方便
  // throw new HxError(1002, "err message");
  //! 4.抛出内置Error类：抛出的包括类的名称、错误消息、调用栈（node和js）。也就是抛出的是其stack的值
  // throw new Error("err message")
  // const err = new Error("err msg");
  // console.log("name-------", err.name);
  // console.log("msg--------", err.message);
  // console.log("stack-------", err.stack);
  //! 5.抛出不同错误类型
  // 5.1 TypeError：类型错误
  throw new TypeError("type error");
  // 5.2 SyntaxError：语法解析错误
  // 5.3 RangeError：下标值越界错误
}

foo();
