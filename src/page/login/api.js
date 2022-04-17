import { request } from "../../network/request";

/**
 * @description 测试
 * @returns {Promise}
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
