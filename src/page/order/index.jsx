import React from "react";
import {
  Form,
  Row,
  Col,
  Select,
  DatePicker,
  Cascader,
  Table,
  Button,
  Input,
} from "antd";
import "./style.css";

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const { Search } = Input;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const classfyOptions = [
  {
    label: "空调器具",
    value: "1",
    children: [
      {
        label: "电风扇",
        value: "1",
      },
      {
        label: "空调",
        value: "2",
      },
      {
        label: "空气清洁器",
        value: "3",
      },
    ],
  },
  {
    label: "制冷器具",
    value: "2",
    children: [
      {
        label: "冰箱",
        value: "4",
      },
      {
        label: "家用制冰机",
        value: "5",
      },
      {
        label: "冰淇淋机",
        value: "6",
      },
      {
        label: "冷饮机",
        value: "7",
      },
    ],
  },
  {
    label: "清洁器具",
    value: "3",
  },
  {
    label: "取暖器具",
    value: "4",
  },
  {
    label: "保健器具",
    value: "5",
  },
  {
    label: "照明器具",
    value: "6",
  },
  {
    label: "电子器具",
    value: "6",
  },
  {
    label: "厨房器具",
    value: "6",
  },
];
const brandOptions = [
  {
    label: "空调器具",
    value: "1",
  },
  {
    label: "空调器具",
    value: "2",
  },
  {
    label: "空调器具",
    value: "3",
  },
  {
    label: "空调器具",
    value: "4",
  },
  {
    label: "空调器具",
    value: "5",
  },
  {
    label: "空调器具",
    value: "6",
  },
];
const effectOptions = [
  {
    label: "未完成",
    value: "0",
  },
  {
    label: "已完成",
    value: "1",
  },
  {
    label: "全部",
    value: "2",
  },
];

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
  const [form] = Form.useForm();

  const onFinish = (value) => {
    console.log(value);
  };

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
      <div className="order-form">
        <Form onFinish={onFinish} form={form} name="productForm">
          <Row>
            <Col span={8}>
              <FormItem name="classfy" label="家电分类" {...formItemLayout}>
                <Cascader options={classfyOptions}></Cascader>
              </FormItem>
            </Col>

            <Col span={8}>
              <FormItem name="brand" label="家电品牌" {...formItemLayout}>
                <Select options={brandOptions}></Select>
              </FormItem>
            </Col>

            <Col span={8}>
              <FormItem name="orderDate" {...formItemLayout} label="订单日期">
                <RangePicker />
              </FormItem>
            </Col>

            <Col span={8}>
              <FormItem name="isEffect" label="订单状态" {...formItemLayout}>
                <Select options={effectOptions}></Select>
              </FormItem>
            </Col>

            <Col span={8} offset={8}>
              <FormItem noStyle>
                <div className="btnWrap">
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>

                  <Button>重置</Button>
                </div>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>

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
