import { mountComponent, destory } from '../utils';
import DialogCom from './dialog.vue';

let instance, unmount;

function Dialog(options) {
  return new Promise((resolve, reject) => {
    if (!instance) {
      ({ instance, unmount } = mountComponent(
        DialogCom,
        // ! 追加 props
        Object.assign(Dialog.defaultOptions, options, {
          'onUpdate:show': (flag) => {
            unmount();
            instance = null;
          },
          callback: (action) => {
            (action === 'confirm' ? resolve : reject)(action);
          },
        })
      ));
    }

    document.body.appendChild(instance.$el);
  });
}

Dialog.defaultOptions = {
  show: true,
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
};

Dialog.alert = Dialog;

Dialog.confirm = (options) =>
  Dialog({
    showCancelButton: true,
    ...options,
  });

Dialog.close = () => {
  if (instance) {
    instance.$el.remove();
    instance = null;
  }
};

Dialog.setDefaultOptions = (options) => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.resetDefaultOptions();

Dialog.Component = DialogCom;

export const showDialog = Dialog;

export default Dialog;
