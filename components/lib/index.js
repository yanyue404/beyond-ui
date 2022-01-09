import Demo from "./demo";
import Card from "./card";

const components = {
  Demo,
  Card,
};
const version = "0.0.1";

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

export { install, Demo, Card };

export default {
  install,
  version,
};
