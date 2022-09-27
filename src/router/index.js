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
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/HomePage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
