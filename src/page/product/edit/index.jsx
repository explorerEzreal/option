import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Cascader,
  Select,
  message,
} from "antd";
import VideoCard from "../components/videoCard";
import {
  getClassfy,
  getBrand,
  addProduct,
  getProductInfo,
  editProductInfo,
} from "../api";
import Avatar from "../../../components/avatar/Avatar";
import "./style.css";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const ProductEdit = () => {
  const [detail, setDetail] = useState({});
  const [classfyOptions, setClassfyOptions] = useState();
  const [brandOptions, setBrandOptions] = useState();

  const [form] = Form.useForm();
  const histroy = useNavigate();
  const location = useLocation();

  const { id } = location.state || {};

  const onAddProduct = async (params) => {
    const { data } = await addProduct(params);
    console.log(data);
    if (data?.code !== 0) {
      message.error(data.mse || "系统错误");
      return;
    }
    histroy("/Product");
  };

  const getDetail = async (id) => {
    const params = {
      id,
    };
    const { data } = await getProductInfo(params);

    if (data.code !== 0) {
      message.error("系统错误");
      return;
    }
    const proInfo = JSON.parse(data.data);

    let detailData = proInfo[0].fields || {};
    console.log(detailData);

    detailData = {
      ...detailData,
      classfy: detailData.classfy.split(","),
    };
    form.setFieldsValue({ ...detailData });
    setDetail(detailData);
  };

  const onEditProduc = async (params) => {
    const { data } = await editProductInfo(params);
    if (data?.code !== 0) {
      message.error(data.mse || "系统错误");
      return;
    }
    histroy("/Product");
  };

  const onFinish = (value) => {
    let params = {
      ...value,
      classfy: value.classfy.join(","),
    };

    if (id) {
      onEditProduc({ ...params, id });
      return;
    }
    onAddProduct(params);
  };

  // 商品名称发生变化
  const onNameChange = (e) => {
    setDetail({ ...detail, name: e.target.value });
  };

  // 图片发生变化
  const onUrlChange = (e) => {
    setDetail({ ...detail, frontUrl: e });
  };

  // 商品描述发生变化
  const onDescribeChange = (e) => {
    setDetail({ ...detail, describe: e.target.value });
  };

  // 价格发生变化
  const onPriceChange = (value) => {
    setDetail({ ...detail, price: value });
  };

  // 取消回调
  const onFormCancel = () => {
    histroy("/Product");
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

  useEffect(() => {
    if (id) {
      getDetail(id);
    }
    onGetClassfy();
    onGetBrandList();
  }, []);

  return (
    <div className="c-product-edit">
      <div className="edit-content">
        <Form name="productInfo" form={form} onFinish={onFinish}>
          <FormItem
            name="name"
            label="商品名称"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入商品名称",
              },
            ]}
          >
            <Input onChange={onNameChange} placeholder="请输入商品名称" />
          </FormItem>

          <FormItem
            name="classfy"
            label="分类"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请选择名称",
              },
            ]}
          >
            <Cascader options={classfyOptions}></Cascader>
          </FormItem>

          <FormItem
            name="brand"
            label="品牌"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请选择品牌",
              },
            ]}
          >
            <Select options={brandOptions}></Select>
          </FormItem>

          <FormItem
            name="describe"
            label="商品描述"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入商品描述",
              },
            ]}
          >
            <Input onChange={onDescribeChange} placeholder="请输入商品描述" />
          </FormItem>

          <FormItem
            name="price"
            label="商品价格"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入商品价格",
              },
            ]}
          >
            <InputNumber
              onChange={onPriceChange}
              prefix="￥"
              style={{ width: "100%" }}
            />
          </FormItem>

          <FormItem
            name="frontUrl"
            label="上传图片"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入图片链接",
              },
            ]}
          >
            <Avatar value={detail.imgUrl} onChange={onUrlChange} />
          </FormItem>

          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button onClick={onFormCancel}>取消</Button>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="edit-video">
        <VideoCard
          isShowbtn={false}
          imgUrl={detail?.frontUrl || ""}
          title={detail?.name || ""}
          tags={detail?.describe || ""}
          updateTime={detail?.price || ""}
        />
      </div>
    </div>
  );
};

export default ProductEdit;
