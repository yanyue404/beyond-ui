// 自动生成文件

import banner from './banner';
import card from './card';
import demo from './demo';
import demoButton from './demo-button';
import drawerLayout from './drawer-layout';
import formInput from './form-input';
import formRadio from './form-radio';
import formRadioGroup from './form-radio-group';
import formRow from './form-row';
import formSwitch from './form-switch';
import mask from './mask';
import rateList from './rate-list';
import segment from './segment';

let components = {};
let files = require.context("./", true, /index\.js$/);

files.keys().forEach((item) => {
  const fileName = item.replace(/(^\.\/)|(\/index\.js$)/g, "");
  if (fileName !== "index.js" && fileName !== "utils") {
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
export {
  install,
  banner, card, demo, demoButton, drawerLayout, formInput, formRadio, formRadioGroup, formRow, formSwitch, mask, rateList, segment
};

export default {
  install,
  version,
};