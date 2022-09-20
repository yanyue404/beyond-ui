import Demo from "./demo";
import Card from "./card";

let components = {};
let files = require.context("./", true, /\.js$/);
files.keys().forEach((item) => {
  const fileName = item.replace(/(^\.\/)|(\/index\.js$)/g, "");
  if (fileName !== "index.js") {
    components[fileName] = files(item).default || files(item);
  }
});

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
