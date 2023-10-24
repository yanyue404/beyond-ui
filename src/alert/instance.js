import _Alert from './alert.vue';
import { mountComponent } from '../utils';

const initInstance = () => {
  const { instance } = mountComponent(_Alert);

  return {
    add(noticeProps) {
      instance.add(noticeProps);
    },
    remove(name) {
      instance.remove(name);
    },
  };
};

export default initInstance;
