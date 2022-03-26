import React from "react";
import { Routes, Route } from "react-router-dom";

import Member from "../../../page/member/index";
import MemberDetail from "../../../page/member/detail";

import Product from "../../../page/product/product/index";
import ProductEdit from "../../../page/product/edit";
import ProductList from "../../../page/product/index";

import Account from "../../../page/system/account/index";
import ModifyPwd from "../../../page/system/modifyPwd/index";
import Personal from "../../../page/system/personal/index";

import Order from "../../../page/order";
import SalesStatistics from "../../../page/statistics/salesStatistics";

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Member />} />
      <Route path="/memberEdit" element={<Member />} />
      <Route path="/memberEdit/detail" element={<MemberDetail />} />

      {/* 商品列表 */}
      <Route path="/ProductList" element={<ProductList />} />
      {/* 商品 */}
      <Route path="/Product" element={<Product />} />
      {/* 编辑商品 */}
      <Route path="/ProductEdit" element={<ProductEdit />} />

      <Route path="/orderPost" element={<Order />} />
      <Route path="/salesData" element={<SalesStatistics />} />
      {/* <Route path="/user" element={<Users />} /> */}

      {/* 系统管理 */}
      <Route path="/account" element={<Account />} />
      <Route path="/modifyPwd" element={<ModifyPwd />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  );
};

export default Path;
