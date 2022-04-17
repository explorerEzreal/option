import { request } from "../../network/request";

/**
 * @description 添加用户
 * @returns {Object}
 */
export async function addUser(params) {
  let data = {};
  await request({
    url: "/oprate/addUser",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 获取用户列表
 * @returns {Object}
 */
export async function getUserList(params) {
  let data = {};
  await request({
    url: "/oprate/getUserList",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 获取用户详情
 * @returns {Object}
 */
export async function getUserDetail(params) {
  let data = {};
  await request({
    url: "/oprate/getUserDetail",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 修改用户信息
 * @returns {Object}
 */
export async function editUser(params) {
  let data = {};
  await request({
    url: "/oprate/editUser",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}
