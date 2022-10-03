const fs = require("fs");
export function throttle(fn, wait = 1500) {
  let _lastTime = null;
  return function () {
    let _nowTime = +new Date();
    if (_nowTime - _lastTime > wait || !_lastTime) {
      fn.apply(this, arguments);
      _lastTime = _nowTime;
    }
  };
}

export const camelize = (str) => {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
};

