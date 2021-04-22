import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import path from "path";
const path = require("path");
import { resolve } from "path";
import styleImport from "vite-plugin-style-import";

console.log("**********", path.resolve(__dirname, "./src"));

// https://vitejs.dev/config/config:
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "/@/": resolve(__dirname, "src"),
    },
  },

  base: "./",
  //@ts-ignore
  outDir: "dist",
  // //@ts-ignore
  // cssPreprocessOptions: {
  //   scss: {
  //     additionalData: '@import "./src/style/common.scss";', // 添加公共样式
  //   },
  // },
  server: {
    // cors: true,
    host: "localhost",
    port: 3001,
    // cors: true,
    open: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7001/",
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
        // secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
