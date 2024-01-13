import _Alert from './alert.vue';
import { mountComponent } from '../utils';

let messageInstance;

const createInstance = () => {
  const { instance } = mountComponent(_Alert);

  console.log('instance', instance);

  return {
    add(noticeProps) {
      instance.add(noticeProps);
    },
    remove(name) {
      instance.remove(name);
    },
  };
};

function getMessageInstance() {
  messageInstance = messageInstance || createInstance();
  return messageInstance;
}

function notice({ type = '', duration = 1.5, content = '' }) {
  let instance = getMessageInstance();

  instance.add({
    type,
    content,
    duration,
  });
}

export const showAlert = (options) => {
  return notice(options);
};

export default _Alert;
