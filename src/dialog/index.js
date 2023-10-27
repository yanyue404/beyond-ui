import Vue from 'vue';
import { isServer, mountComponent } from '../utils';
import DialogCom from './dialog.vue';

let instance;

function Dialog(options) {
  if (isServer()) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      ({ instance } = mountComponent(DialogCom, {
        propsData: {
          lazyRender: false,
        },
      }));

      instance.$on('input', (value) => {
        instance.value = value;
        Dialog.resetDefaultOptions();
      });
    }

    Object.assign(instance, Dialog.currentOptions, options, {
      resolve,
      reject,
    });

    //  处理好实例再插入页面
    document.body.appendChild(instance.$el);
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  theme: null,
  message: '',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false, // 不支持
  callback: (action) => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  },
};

Dialog.alert = Dialog;

Dialog.confirm = (options) =>
  Dialog({
    showCancelButton: true,
    ...options,
  });

Dialog.close = () => {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = (options) => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.resetDefaultOptions();

Dialog.install = () => {
  Vue.use(DialogCom);
};

Dialog.Component = DialogCom;

Vue.prototype.$dialog = Dialog;

export default Dialog;
