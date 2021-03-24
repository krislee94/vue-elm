import { createRouter, createWebHistory, Router } from "vue-router";

/**
 * 动态加载似乎有问题
 */
import Home from "../pages/homepage/index.vue";

import App from "../App.vue";
// import Login from "../components/login.vue";
// const login = (r) => require;
interface IRoutersParam {
  path: string;
  redirect?: string;
  name?: string;
  component?: string;
}
const routes = [
  //空白页展示
  // {
  //   path: "/",
  //   redirect: "/dashboard",
  // },
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
    },
    component: () =>
      Promise.resolve().then(() => import("../pages/homepage/index.vue")),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    // component: () => import("../components/login.vue"),
    component: () =>
      Promise.resolve().then(() => import("../components/login/login.vue")),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
