import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./style.css";

const FormItem = Form.Item;

const Login = (props) => {
  const { onChange } = props;
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onSubmit = async (value) => {
    onChange(value);
    navigate("/main");
  };
  return (
    <div className="login-content">
      <div className="login-form">
        <Form form={form} onFinish={onSubmit}>
          <FormItem name="userPhone">
            <Input placeholder="请输入账号" prefix={<UserOutlined />} />
          </FormItem>

          <FormItem name="userPassword">
            <Input.Password
              placeholder="请输入密码"
              prefix={<LockOutlined />}
            />
          </FormItem>

          <div className="login-btn-wrap">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
