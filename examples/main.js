import Vue from "vue";
import App from "./App.vue";

// 本地开发
import "../components/css/card.scss";
import "../components/css/demo.scss";
import { Demo, Card } from "../components/lib/index";
// import Card from "../components/lib/card/index";

Vue.use(Demo);
Vue.use(Card);

// 生产 npm 组件库，全部引用

// import "beyond-ui/dist/css/index.css";
// import BeyondUI from "beyond-ui";
// Vue.use(BeyondUI);

// 生产 npm 组件库，按需引用
// import "beyond-ui/dist/css/demo.css";
// import { Demo } from "beyond-ui";
// Vue.use(Demo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
