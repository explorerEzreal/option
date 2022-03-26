import axios from "axios";

export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 1000,
  });
  //发送真正的网络请求
  return instance(config);
}
