import axios from "axios";
import { Message } from "element3";

axios.defaults.baseURL =
  process.env.NODE_ENV == "development"
    ? "//127.0.0.1:7001"
    : "//api.krislee-vip.com";
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.post["Content-Type"] = "application/json";

//处理返回
axios.interceptors.response.use((res) => {
  if (typeof res.data !== "object") {
    Message.error("服务端异常！");
    return Promise.reject(res);
  }

  return res.data;
});

export default axios;
