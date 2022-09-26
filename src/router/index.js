import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "/formpage",
        name: "formpage",
        label: "表单页",
        component: () => import("@/views/FormPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
