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
  {
    path: "/find",
    name: "Find",
    meta: {
      title: "发现",
    },
    component: () =>
      Promise.resolve().then(() => import("../pages/find/index.vue")),
  },
  {
    path: "/order",
    name: "Order",
    meta: {
      title: "订单",
    },
    component: () =>
      Promise.resolve().then(() => import("../pages/order/index.vue")),
  },
  {
    path: "/mine",
    name: "Mine",
    meta: {
      title: "我的",
    },
    component: () =>
      Promise.resolve().then(() => import("../pages/mine/index.vue")),
  },
  {
    path: "/locationlist",
    name: "LocationList",
    meta: {
      title: "定位",
    },
    component: () =>
      Promise.resolve().then(
        () => import("../pages/location/location-list.vue")
      ),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
