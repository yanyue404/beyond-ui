import Alert from './alert.jsx';
import newInstance from './instance.js';

let messageInstance;

function getMessageInstance() {
  messageInstance = messageInstance || newInstance();
  return messageInstance;
}

function notice({ duration = 1.5, content = '' }) {
  let instance = getMessageInstance();

  instance.add({
    content: content,
    duration: duration,
  });
}

export const showAlert = (options) => {
  return notice(options);
};

export default Alert;
