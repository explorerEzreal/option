import { request } from "../../../network/request";

/**
 * @description 精准推送 - 查询标签人数
 * @returns {Promise}
 */
export function getTagUserNum(param) {
  return request({
    url: "/sales/orders/",
    method: "get",
    param,
  });
}
