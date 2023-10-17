import Vue from 'vue';

export const isServer = () => Vue.prototype.$isServer;

export function isObject(value) {
  const type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

export function isEmpty(value) {
  if (isObject(value)) {
    if (value == null) {
      return true;
    }
    if (Array.isArray(value)) {
      return !value.length;
    }
    return Object.keys(value).length === 0;
  }
  return false;
}

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

export function mount(component, opt, el) {
  if (!component) {
    console.warn('亲，请传入正确的组件');
  }
  if (!el) {
    el = document.createElement('div');
    document.body.appendChild(el);
  }
  return new Vue({
    el,
    render(h) {
      return h(component, opt);
    },
  });
}

export function destory(vm) {
  vm.$el.remove();
  vm.$destroy();
}

export function deepCopy() {}
