function debounce(fn, interval, immediate = false) {
  let timer = null;
  let isInvoke = false;
  // 不能返回一个箭头函数，因为找到的this将会是debounce的this，即为window
  return function _debounce(...args) {
    if (timer) clearTimeout(timer);
    // 事件一被触发就执行一次响应函数
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      isInvoke = false;
    }, interval);
  };
}
