import Vue from 'vue';
import AlertCom from './index.vue';

let action;

const useInstance = (properties) => {
  const props = properties || {};

  const instance = new Vue({
    data: props,
    render(h) {
      return h(AlertCom, {
        props,
      });
    },
  });

  const component = instance.$mount();
  document.body.appendChild(component.$el);

  const alert = instance.$children[0];

  return {
    add(noticeProps) {
      alert.add(noticeProps);
    },
    remove(name) {
      alert.remove(name);
    },
  };
};

function notice({ type = '', duration = 1.5, content = '' }) {
  action = action || useInstance();

  action.add({
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

export default Alert;
