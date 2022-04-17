import { request } from "../../network/request";

/**
 * @description 获取会员列表
 * @returns {Object}
 */
export async function getMemberList(params) {
  let data = {};
  await request({
    url: "/oprate/getMemberList",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 添加会员
 * @returns {Object}
 */
export async function addMember(params) {
  let data = {};
  await request({
    url: "/oprate/addMember",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 修改会员
 * @returns {Object}
 */
export async function editMember(params) {
  let data = {};
  await request({
    url: "/oprate/editMember",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 删除会员
 * @returns {Object}
 */
export async function deleteMember(params) {
  let data = {};
  await request({
    url: "/oprate/deleteMember",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}
