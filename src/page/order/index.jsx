import React, { useEffect, useState } from "react";
import { Table, Input } from "antd";
import { listoprateorder } from "./api";
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
  const [list, setList] = useState();
  const onSearch = (value) => {
    getList(value);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "订单名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "商品名称",
      dataIndex: "appliance__name",
      key: "appliance__name",
    },
    {
      title: "收件人",
      dataIndex: "member__name",
      key: "member__name",
    },
    {
      title: "订单状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "数量",
      dataIndex: "nums",
      key: "nums",
    },
  ];
  const getList = async (id = "") => {
    const params = {
      id: id === "" ? "" : id * 1,
    };

    const { data } = await listoprateorder(params);

    if (data.code === 0) {
      const list = data.data.map((item) => {
        return { ...item, key: item.id };
      });
      setList(list);
    }
  };

  useEffect(() => {
    getList();
  }, []);

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

        <Table onChange={onChange} dataSource={list} columns={columns} />
      </div>
    </div>
  );
};

export default Order;
