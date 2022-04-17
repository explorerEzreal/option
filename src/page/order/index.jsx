import React from "react";
import { Table, Input } from "antd";
import "./style.css";

const { Search } = Input;

const dataSource = [
  {
    key: "1",
    state: "未完成",
    customerName: "陈平安",
    brand: "格力",
    phone: 18978772714,
    address: "浩然天下，宝瓶洲，大骊王朝",
    orderid: "1",
    productName: "官方标配，黑色智能冰箱",
    nums: 1,
    price: 1500,
  },
  {
    key: "1",
    state: "未完成",
    customerName: "陈平安",
    brand: "格力",
    phone: 18978772714,
    address: "浩然天下，宝瓶洲，大骊王朝",
    orderid: "1",
    productName: "官方标配，黑色智能冰箱",
    nums: 1,
    price: 1500,
  },
  {
    key: "1",
    state: "未完成",
    customerName: "陈平安",
    brand: "格力",
    phone: 18978772714,
    address: "浩然天下，宝瓶洲，大骊王朝",
    orderid: "1",
    productName: "官方标配，黑色智能冰箱",
    nums: 1,
    price: 1500,
  },
];

const Order = () => {
  const onSearch = (value) => {
    console.log(value);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "商品名称",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "品牌",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "收件人",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "电话",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "订单状态",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "数量",
      dataIndex: "nums",
      key: "nums",
    },
    {
      title: "成交价",
      dataIndex: "price",
      key: "price",
    },
  ];

  return (
    <div className="c-order">
      <div className="order-tag"></div>

      <div className="order-table">
        <div className="order-table-input">
          <Search
            placeholder="输入订单号查询"
            onSearch={onSearch}
            enterButton
          />
        </div>

        <Table onChange={onChange} dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
};

export default Order;
