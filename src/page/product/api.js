import { request } from "../../network/request";

/**
 * @description 获取分类数据
 * @returns {Object}
 */
export async function getClassfy(params) {
  let data = {};
  await request({
    url: "/oprate/getClassfy",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 获取品牌数据
 * @returns {Object}
 */
export async function getBrand(params) {
  let data = {};
  await request({
    url: "/oprate/getBrand",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 添加商品
 * @returns {Object}
 */
export async function addProduct(params) {
  let data = {};
  await request({
    url: "/oprate/addProduct",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 获取商品列表
 * @returns {Object}
 */
export async function getProduct(params) {
  let data = {};
  await request({
    url: "/oprate/getProduct",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 获取新商品列表
 * @returns {Object}
 */
export async function getNewProduct(params) {
  let data = {};
  await request({
    url: "/oprate/getNewProduct",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}

/**
 * @description 下架商品
 * @returns {Object}
 */
export async function editProduct(params) {
  let data = {};
  await request({
    url: "/oprate/editProduct",
    method: "post",
    data: params,
  }).then((res) => {
    data = res;
  });

  return data;
}
