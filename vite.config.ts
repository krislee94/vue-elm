import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // alias: {
  //   "/@/": resolve(__dirname, "src"),
  // },
  // base: "./",
  // //@ts-ignore
  // outDir: "dist",
  // //@ts-ignore
  // cssPreprocessOptions: {
  //   scss: {
  //     additionalData: '@import "./src/style/common.scss";', // 添加公共样式
  //   },
  // },
});
