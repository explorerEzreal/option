import React, { useState } from "react";
import { Form, Select, Row, Col, Input, Checkbox, Button } from "antd";

import "./style.css";

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const plainOptions = ["会员管理", "商品管理", "订单管理", "系统管理", "首页"];

const Personal = () => {
  const [form] = Form.useForm();
  const [option, setOption] = useState(plainOptions);

  const onSubmit = (value) => {
    console.log(value);
  };

  const onTypeChange = (value) => {
    console.log(value);
    let newOptiob = [...option];
    if (value === "1") {
      newOptiob = ["会员管理", "商品管理", "订单管理", "首页"];
      setOption(newOptiob);
      return;
    }

    setOption(plainOptions);
  };

  const onJurisdictionChange = (value) => {
    console.log(value);
  };

  return (
    <div className="p-Personal-content">
      <div className="performcontent">
        <Form form={form} onFinish={onSubmit}>
          <Row>
            <Col span={10}>
              <FormItem
                {...formItemLayout}
                name="userType"
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
                name="trueName"
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
            <Col span={24}>
              <FormItem
                name="jurisdiction"
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
                <Checkbox.Group
                  options={option}
                  onChange={onJurisdictionChange}
                />
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
