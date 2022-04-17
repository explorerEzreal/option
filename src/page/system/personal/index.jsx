import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, Select, Row, Col, Input, Checkbox, Button, Radio } from "antd";
import { addUser, getUserDetail, editUser } from "../api";

import "./style.css";

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const plainOptions = [
  {
    label: "会员管理",
    value: "1",
  },
  {
    label: "商品管理",
    value: "2",
  },
  {
    label: "订单管理",
    value: "3",
  },
  {
    label: "系统管理",
    value: "4",
  },
];

const statusOption = [
  {
    label: "启用",
    value: "1",
  },
  {
    label: "不启用",
    value: "0",
  },
];

const Personal = () => {
  const [form] = Form.useForm();
  const [option, setOption] = useState(plainOptions);

  const location = useLocation();

  const { phone } = location.state || {};

  const onAddUser = async (params) => {
    const { data } = await addUser(params);
  };

  const onEditUser = async (params) => {
    const { data } = await editUser(params);
  };

  const onSubmit = (value) => {
    console.log(value);
    const params = {
      ...value,
      menu: ((value.menu || []).map((i) => i) || []).join(","),
    };

    if (phone) {
      // onGetUserDetail(phone);
      onEditUser(params);
      return;
    }

    onAddUser(params);
  };

  const onTypeChange = (value) => {
    let newOptiob = [...option];
    if (value === "1") {
      newOptiob = plainOptions.slice(0, -1);
      setOption(newOptiob);
      return;
    }

    setOption(plainOptions);
  };

  const onGetUserDetail = async (value) => {
    const params = {
      phone,
    };
    const { data } = await getUserDetail(params);
    const menu = data.data.menu.split(",");
    form.setFieldsValue({ ...data.data, menu });
  };

  useEffect(() => {
    console.log(phone, "phone");
    if (phone) {
      onGetUserDetail(phone);
    }
  }, []);
  return (
    <div className="p-Personal-content">
      <div className="performcontent">
        <Form form={form} onFinish={onSubmit}>
          <Row>
            <Col span={10}>
              <FormItem
                {...formItemLayout}
                name="type"
                label="账号类型"
                rules={[
                  {
                    required: true,
                    message: "请选择账号类型",
                  },
                ]}
              >
                <Select placeholder="请选择账号类型" onChange={onTypeChange}>
                  <Option value="0">管理员</Option>
                  <Option value="1">普通用户</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={10}>
              <FormItem
                {...formItemLayout}
                name="name"
                label="真实姓名"
                rules={[
                  {
                    required: true,
                    message: "请填写真实姓名",
                  },
                ]}
              >
                <Input placeholder="请填写真实姓名" />
              </FormItem>
            </Col>

            <Col span={10} push={4}>
              <FormItem
                {...formItemLayout}
                name="nickname"
                label="昵称"
                rules={[
                  {
                    required: true,
                    message: "请填写昵称",
                  },
                ]}
              >
                <Input placeholder="请填写昵称" />
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={10}>
              <FormItem
                {...formItemLayout}
                name="phone"
                label="电话号码"
                rules={[
                  {
                    required: true,
                    message: "请填写电话号码",
                  },
                ]}
              >
                <Input placeholder="请填写电话号码" />
              </FormItem>
            </Col>

            <Col span={10} push={4}>
              <FormItem
                {...formItemLayout}
                name="password"
                label="密码"
                rules={[
                  {
                    required: true,
                    message: "请填写密码",
                  },
                ]}
              >
                <Input.Password placeholder="请填写密码" />
              </FormItem>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <FormItem
                name="menu"
                label="权限配置"
                {...formItemLayout}
                // initialValue={["Apple"]}
                rules={[
                  {
                    required: true,
                    message: "请选择权限",
                  },
                ]}
              >
                <Checkbox.Group options={option} />
              </FormItem>
            </Col>

            <Col span={12}>
              <FormItem
                name="status"
                label="状态"
                {...formItemLayout}
                // initialValue={["Apple"]}
                rules={[
                  {
                    required: true,
                    message: "请选择状态",
                  },
                ]}
              >
                <Radio.Group options={statusOption} />
              </FormItem>
            </Col>
          </Row>

          <div className="per-btn-wrap">
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Personal;
