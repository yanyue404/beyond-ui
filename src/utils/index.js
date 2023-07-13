

/**
 * 按指定精度格式化小数
 * @param {number} number 待格式化数字
 * @param {number} precision 精度
 * @returns
 */
export function toFixed(number, precision) {
  const val = Math.round(Math.abs(precision));
  precision = isNaN(val) ? 2 : precision;
  const power = Math.pow(10, precision);
  return (Math.round((number + 1e-8) * power) / power).toFixed(precision);
}

/**
 * 格式化金额
 * @param {number} number 待格式化金额
 * @param {number} precision 小数位精度
 * @param {string} symbol 钱币标识
 * @returns
 */
export function formatMoney(number, { precision = 2, symbol = '￥' } = {}) {
  if (number === undefined || number === null || number === '' || isNaN(number))
    return number;
  const negative = number < 0 ? '-' : '';
  const [integer, decimal] = toFixed(Math.abs(number), precision).split('.');
  const mod = integer.length > 3 ? integer.length % 3 : 0;
  return (
    symbol +
    negative +
    (mod ? integer.substr(0, mod) + ',' : '') +
    integer.substr(mod).replace(/(\d{3})(?=\d)/g, '$1,') +
    (decimal ? '.' + decimal : '')
  );
}

export function throttle(fn, delay) {
  let curTime = Date.now();

  return function () {
    const context = this;
    const args = arguments;
    const nowTime = Date.now();

    if (nowTime - curTime >= delay) {
      curTime = Date.now();
      return fn.apply(context, args);
    }
  };
}

export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
  };
  return map[toString.call(obj)];
}
// deepCopy
export function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}
