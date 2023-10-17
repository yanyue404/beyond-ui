import Vue from 'vue';
import AlertCom from './alert.vue';
import Notification from './notification.js';

let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance();

  instance.add({
    content: content,
    duration: duration,
  });
}

function Alert() {}

Alert.info = (options) => {
  return notice(options);
};

Vue.prototype.$alert = Alert;

Alert.install = () => {
  Vue.use(AlertCom);
};

Alert.Component = AlertCom;

export default Alert;
