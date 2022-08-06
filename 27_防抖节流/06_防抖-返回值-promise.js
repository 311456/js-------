//! 缺点：很多edge case 没有进行处理 

function debounce(fn, interval, immediate = false) {
  // 不能直接return，因为setTimeout是异步执行的
  let timer = null;
  let isInvoke = false;
  // 不能返回一个箭头函数，因为找到的this将会是debounce的this，即为window
  function _debounce(...args) {
    return new Promise((resolve, reject) => {
      if (timer) clearTimeout(timer);
      // 事件一被触发就执行一次响应函数
      if (immediate && !isInvoke) {
        const result = fn.apply(this, args);
        resolve(result);
        isInvoke = true;
        timer = null;
      }
      timer = setTimeout(() => {
        const result = fn.apply(this, args);
        resolve(result);
        isInvoke = false;
        timer = null;
      }, interval);
    });
  }
  // 取消防抖
  _debounce.cancel = function () {
    if (timer) clearTimeout(timer);
    isInvoke = false;
    timer = null;
  };
  return _debounce;
}
