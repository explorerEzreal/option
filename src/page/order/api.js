import { request } from "../../network/request";

/**
 * @description 获取订单数据
 * @returns {Object}
 */
export async function listoprateorder(params) {
  let data = {};
  await request({
    url: "/oprate/listoprateorder",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}
