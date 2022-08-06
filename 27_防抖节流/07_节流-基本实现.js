function throttle(fn, interval) {
  let lastTime = 0;
  function _throttle(...args) {
    let nowTime = new Date().getTime();
    let remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      fn.apply(this, args);
      lastTime = nowTime;
    }
  }
  return _throttle;
}
