import Vue from 'vue';
import { isServer, mount, destory } from '../utils';
import DialogCom from './dialog.vue';

let instance, dialog;

function Dialog(options) {
  if (isServer()) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    if (!instance) {
      instance = mount(DialogCom, {
        on: {
          input: (val) => {
            destory(instance);
            dialog.value = val;
            instance = null;
            Dialog.resetDefaultOptions();
          },
        },
        props: Object.assign(Dialog.currentOptions, options),
      });

      dialog = instance.$children[0];
    }

    Object.assign(dialog, {
      resolve,
      reject,
    });
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
    dialog[action === 'confirm' ? 'resolve' : 'reject'](action);
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
