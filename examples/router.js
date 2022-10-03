import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "demo",
    component: () => import("./views/demo.vue"),
  },
  {
    path: "/banner",
    name: "banner",
    component: () => import("./views/banner"),
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});

export default router;
