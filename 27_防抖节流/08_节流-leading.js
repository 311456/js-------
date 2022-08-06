function throttle(fn, interval, options = { leading: true, trailing: false }) {
  const { leading } = options;
  let lastTime = 0;
  function _throttle(...args) {
    let nowTime = new Date().getTime();
    // 首次触发事件不执行
    // if (lastTime === 0 && leading === false) lastTime = nowTime;
    if (!lastTime && !leading) lastTime = nowTime;

    let remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      fn.apply(this, args);
      lastTime = nowTime;
    }
  }
  return _throttle;
}
