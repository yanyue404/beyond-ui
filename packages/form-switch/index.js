import ComponentName from "./index.vue";

ComponentName.install = function (Vue) {
  Vue.component(ComponentName.name, ComponentName);
};

export default ComponentName;
