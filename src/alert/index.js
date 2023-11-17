import Alert from './_alert';
import AlertCom from './index.vue';

Alert.install = (Vue) => {
  Vue.prototype['$alert'] = Alert;
  Vue.component(AlertCom.name, AlertCom);
};

export default Alert;
