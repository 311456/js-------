function debounce(fn, interval) {
  let timer = null;
  // 不能返回一个箭头函数，因为找到的this将会是debounce的this，即为window
  return function _debounce(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, interval);
  };
}
