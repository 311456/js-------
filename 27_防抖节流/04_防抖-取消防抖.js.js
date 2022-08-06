function debounce(fn, interval, immediate = false) {
  let timer = null;
  let isInvoke = false;
  // 不能返回一个箭头函数，因为找到的this将会是debounce的this，即为window
  function _debounce(...args) {
    if (timer) clearTimeout(timer);
    // 事件一被触发就执行一次响应函数
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      isInvoke = false;
      timer = null;
    }, interval);
  }
  // 取消防抖
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    isInvoke = false;
    timer = null;
  };
  return _debounce;
}
