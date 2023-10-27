/* eslint-disable prefer-rest-params */
import Vue from 'vue';
import toastComponent from './index.vue';

// 组件构造器，构造出一个 vue组件实例
const ToastConstructor = Vue.extend(toastComponent);
let toastDom;

function showToast({ text, type = '', duration = 2000 }) {
  if (toastDom) {
    return false;
  }

  if (arguments.length === 1 && typeof arguments[0] === 'string') {
    text = arguments[0];
  }

  toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        isShow: true, // 是否显示
        text, // 文本内容
        type, // 类型（不支持，等待扩展）
      };
    },
  });
  // 添加节点
  document.body.appendChild(toastDom.$el);
  // 过渡时间
  setTimeout(() => {
    toastDom.isShow = false;
    toastDom = '';
  }, duration);
}

Vue.prototype.$toast = showToast;

export default toastComponent;
