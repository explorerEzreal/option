import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Select, Button, Cascader } from "antd";
import VideoCard from "../components/videoCard";
import { getClassfy, getBrand, getNewProduct } from "../api";
import "./style.css";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Product = () => {
  const [form] = Form.useForm();
  const histroy = useNavigate();
  const [classfyOptions, setClassfyOptions] = useState();
  const [brandOptions, setBrandOptions] = useState();
  const [list, setList] = useState();

  const onFinish = (value) => {
    console.log(value);
    const params = {
      ...value,
      classfy: value.classfy?.join(",") || "",
      brand: value.brand || "",
    };
    console.log(params);
    onGetProduct(params);
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

  const onGetClassfy = async () => {
    const { data } = await getClassfy();

    const list = data.data;
    const classfyList = list.map((item) => {
      const label = item.label.split(",");
      const children = label.map((subItem) => {
        return {
          label: subItem,
          value: subItem,
          key: subItem,
        };
      });
      return {
        label: item.name,
        value: item.name,
        key: item.name,
        children,
      };
    });
    setClassfyOptions(classfyList);
  };

  const onGetBrandList = async () => {
    const { data } = await getBrand();
    console.log(data);
    const list = data.data;
    const brandList = list.map((item) => {
      return {
        label: item.name,
        value: item.name,
        key: item.name,
      };
    });
    setBrandOptions(brandList);
  };

  const onGetProduct = async (params) => {
    const { data } = await getNewProduct(params);

    setList(data.data);
  };

  useEffect(() => {
    onGetClassfy();
    onGetBrandList();
    onGetProduct({ brand: "", classfy: "" });
  }, []);

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
                <Button
                  onClick={() => {
                    form.resetFields();
                  }}
                >
                  重置
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="product-edit-table">
        <div className="table-head">
          <div className="left-nums">
            共查询到<span>{list?.length}</span>条数据
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
