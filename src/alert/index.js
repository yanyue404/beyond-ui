import Vue from 'vue';
import AlertCom from './alert.vue';
import Notification from './notification.js';

let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice({ type = '', duration = 1.5, content = '' }) {
  const instance = getMessageInstance();

  instance.add({
    type,
    content,
    duration,
  });
}

function Alert() {}

['info', 'success', 'warning', 'error'].forEach((v) => {
  Alert[v] = (options) => {
    return notice({ ...options, type: v });
  };
});

Vue.prototype.$alert = Alert;

Alert.install = () => {
  Vue.use(AlertCom);
};

Alert.Component = AlertCom;

export default Alert;
