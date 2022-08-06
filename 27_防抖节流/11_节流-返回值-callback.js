function throttle(
  fn,
  interval,
  options = { leading: true, trailing: false },
  cb
) {
  const { leading, trailing } = options;
  let lastTime = 0;
  let timer = null;
  function _throttle(...args) {
    let nowTime = new Date().getTime();
    // 首次触发事件不执行
    if (!lastTime && !leading) lastTime = nowTime;

    let remainTime = interval - (nowTime - lastTime);

    if (remainTime <= 0) {
      // 执行正常事件函数就不需要执行setTimeout了
      if (timer) clearTimeout(timer);
      timer = null;
      const result = fn.apply(this, args);
      cb(result);
      lastTime = nowTime;
      // 执行后开始下一次的循环
      return;
    }

    // 如果要求尾部执行，并且在之前没有定时器，则添加对应的定时器。（防止同一个时间间隔添加多次定时器）
    if (trailing && !timer) {
      timer = setTimeout(() => {
        const result = fn.apply(this, args);
        cb(result);
        timer = null;
        // 如果首部执行，则继续上一次的函数执行进行计时；如果首部不执行，那么重新开始循环。
        lastTime = leading ? new Date().getTime() : 0;
      }, remainTime);
    }
  }
  // 取消节流
  _throttle.cancel = function () {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };
  return _throttle;
}
