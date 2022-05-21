import { request } from "../network/request";

/**
 * @description 获取菜单
 * @returns {Object}
 */
export async function getMenu(params) {
  let data = {};
  await request({
    url: "/oprate/getMenu",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 获取头像
 * @returns {Object}
 */
export async function uploadAvatar(params) {
  let data = {};
  await request({
    url: "/oprate/uploadAvatar",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}
