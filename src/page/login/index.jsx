import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login } from "./api";
import "./style.css";

const FormItem = Form.Item;

const Login = (props) => {
  const { onChange } = props;
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onSubmit = async (value) => {
    const params = { ...value };
    const { data } = await login(params);

    if (data.code === 0) {
      onChange(value);
      navigate("/main");
      message.info("登录成功");
      return;
    }
    message.error(data.mse);
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
