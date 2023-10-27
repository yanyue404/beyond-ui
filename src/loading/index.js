import vue from 'vue';
import loadingComponent from './index.vue';

// 组件构造器，构造出一个 vue组件实例
const LoadingConstructor = vue.extend(loadingComponent);
let loadingDom;

function showLoading() {
  if (loadingDom) {
    loadingDom.isShow = true;
    return false;
  }
  loadingDom = new LoadingConstructor({
    el: document.createElement('div'),
    data() {
      return {
        isShow: true,
      };
    },
  });
  // 添加节点
  document.body.appendChild(loadingDom.$el);
}

function hideLoading() {
  loadingDom.isShow = false;
}
// 全局注册
function registryLoading() {
  vue.prototype.$showLoading = showLoading;
  vue.prototype.$hideLoading = hideLoading;
}

// 默认注册一下

vue.prototype.$loading = {
  show: showLoading,
  hide: hideLoading,
};

export default registryLoading;
