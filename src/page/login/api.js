import { request } from "../../network/request";

/**
 * @description 登陆
 *
 */
export async function login(params) {
  let data = {};
  await request({
    url: "/oprate/login",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 获取验证码
 *
 */
export async function getCode(params) {
  let data = {};
  await request({
    url: "/oprate/getCode",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}
