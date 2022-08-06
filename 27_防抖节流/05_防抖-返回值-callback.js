/**
 * 防抖函数
 * @param {function} fn 响应函数
 * @param {number} interval 时间间隔
 * @param {boolean} immediate 触发后是否立即执行一次，默认为false
 * @param {function} cb 获取响应函数返回值
 * @returns 一个新函数
 */
function debounce(fn, interval, immediate = false, cb) {
  let timer = null;
  let isInvoke = false;
  // 不能返回一个箭头函数，因为找到的this将会是debounce的this，即为window
  function _debounce(...args) {
    if (timer) clearTimeout(timer);
    // 事件一被触发就执行一次响应函数
    if (immediate && !isInvoke) {
      const result = fn.apply(this, args);
      cb(result);
      isInvoke = true;
      timer = null;
    }
    timer = setTimeout(() => {
      const result = fn.apply(this, args);
      cb(result);
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
