import "element3/lib/theme-chalk/index.css";
import Element3 from "element3";
import router from "./router/router";
import "./assets/icons/iconfont.css";

//createApp模块是创建一个应用
import { createApp } from "vue";
//SPA应用入口
import App from "./App.vue";
//预加载应用, 使用element3
// createApp(App).mount("#app");
createApp(App).use(router).use(Element3).mount("#app");
