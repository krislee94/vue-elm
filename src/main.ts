import "element3/lib/theme-chalk/index.css";
import Element3 from "element3";
import router from "./router/router";
import { Search, Icon, Swipe, SwipeItem } from "vant";
import "./assets/icons/iconfont.css";
import "vant/lib/index.css"; // 全局引入样式
// import CONFIG from "./config";
// import AmapVue from "@amap/amap-vue";

//createApp模块是创建一个应用
import { createApp } from "vue";
//SPA应用入口
import App from "./App.vue";

//使用高德的配置
// AmapVue.config.version = "2.0";
// AmapVue.config.key = CONFIG.GmapVue;

createApp(App)
  .use(router)
  .use(Element3)
  .use(Search)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
  .mount("#app");
