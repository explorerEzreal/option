import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Select, Button, Cascader } from "antd";
import VideoCard from "../components/videoCard";
import "./style.css";

const FormItem = Form.Item;
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

const list = [
  {
    id: "1",
    frontUrl:
      "https://img10.360buyimg.com/n1/jfs/t1/124912/3/22864/133810/62130132Ef092d911/c9ec61719a399e0a.jpg",
    name: "美的(Midea)606升变频一级能效对开双门家用冰箱",
    describe: "大容量精细分储，一级双变频更节能，风冷无霜不结冰",
    price: "3199",
  },
  {
    id: "2",
    frontUrl:
      "https://img10.360buyimg.com/n1/jfs/t1/124912/3/22864/133810/62130132Ef092d911/c9ec61719a399e0a.jpg",
    name: "美的(Midea)606升变频一级能效对开双门家用冰箱",
    describe: "大容量精细分储，一级双变频更节能，风冷无霜不结冰",
    price: "3199",
  },
  {
    id: "3",
    frontUrl:
      "https://img10.360buyimg.com/n1/jfs/t1/124912/3/22864/133810/62130132Ef092d911/c9ec61719a399e0a.jpg",
    name: "美的(Midea)606升变频一级能效对开双门家用冰箱",
    describe: "大容量精细分储，一级双变频更节能，风冷无霜不结冰",
    price: "3199",
  },
  {
    id: "4",
    frontUrl:
      "https://img10.360buyimg.com/n1/jfs/t1/124912/3/22864/133810/62130132Ef092d911/c9ec61719a399e0a.jpg",
    name: "美的(Midea)606升变频一级能效对开双门家用冰箱",
    describe: "大容量精细分储，一级双变频更节能，风冷无霜不结冰",
    price: "3199",
  },
  {
    id: "5",
    frontUrl:
      "https://img10.360buyimg.com/n1/jfs/t1/124912/3/22864/133810/62130132Ef092d911/c9ec61719a399e0a.jpg",
    name: "美的(Midea)606升变频一级能效对开双门家用冰箱",
    describe: "大容量精细分储，一级双变频更节能，风冷无霜不结冰",
    price: "3199",
  },
  {
    id: "6",
    frontUrl:
      "https://img10.360buyimg.com/n1/jfs/t1/124912/3/22864/133810/62130132Ef092d911/c9ec61719a399e0a.jpg",
    name: "美的(Midea)606升变频一级能效对开双门家用冰箱",
    describe: "大容量精细分储，一级双变频更节能，风冷无霜不结冰",
    price: "3199",
  },
];

const Product = () => {
  const [form] = Form.useForm();
  const histroy = useNavigate();

  const onFinish = (value) => {
    console.log(value);
  };

  // 编辑
  const editCallback = (id) => {
    histroy(`/ProductEdit?id=${id}`, { state: { id: id } });
  };

  // 删除
  const deleteCallback = (id) => {
    console.log(id);
  };

  // 新增商品
  const onAddProduct = () => {
    histroy("/ProductEdit");
  };

  return (
    <div className="c-product-list">
      <div className="product-list-form">
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
              <div className="form-btn-wrap">
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button>重置</Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="product-edit-table">
        <div className="table-head">
          <div className="left-nums">
            共查询到<span>{list.length}</span>条数据
          </div>
          <div className="right-btn">
            <Button type="primary" onClick={onAddProduct}>
              新增商品
            </Button>
          </div>
        </div>
        <div className="table-content">
          <div className="video-wrap">
            {list?.length > 0 ? (
              list.map((v) => (
                <VideoCard
                  key={v.id}
                  imgUrl={v.frontUrl}
                  title={v.name}
                  tags={v.describe}
                  updateTime={v.price}
                  editCallback={() => editCallback(v.id)}
                  deleteCallback={() => deleteCallback(v.id)}
                />
              ))
            ) : (
              <div className="placeholder">暂无数据</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
