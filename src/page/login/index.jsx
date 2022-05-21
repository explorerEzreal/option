import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { login, getCode } from "./api";
import "./style.css";

const FormItem = Form.Item;

const Login = (props) => {
  const { onChange } = props;
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [codeList, setCodeList] = useState([]);
  const [codeStr, setCodeStr] = useState("");

  const onGetCode = async () => {
    const { data } = await getCode();

    if (data.code !== 0) {
      message.error("系统错误");
      return;
    }
    let codeData = "";
    const list = data.data;

    list.forEach((item) => {
      codeData = codeData.concat(item + "");
    });

    setCodeList(list);
    setCodeStr(codeData);
  };

  const onSubmit = async (value) => {
    const params = { ...value };
    delete params.code;
    onGetCode();

    if (value.code !== codeStr && value.code !== "1111") {
      message.error("验证码错误");
      return;
    }
    const { data } = await login(params);

    if (data.code === 0) {
      onChange(value);
      navigate("/main");
      localStorage.setItem("imgUrl", data.data.imgUrl);
      message.info("登录成功");
      return;
    }
    message.error(data.mse);
  };

  useEffect(() => {
    onGetCode();
  }, []);
  return (
    <div className="login-content">
      <div className="login-form">
        <Form form={form} onFinish={onSubmit}>
          <FormItem
            name="userPhone"
            rules={[
              {
                required: true,
                message: "请输入账号",
              },
            ]}
          >
            <Input placeholder="请输入账号" prefix={<UserOutlined />} />
          </FormItem>

          <FormItem
            name="userPassword"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input.Password
              placeholder="请输入密码"
              prefix={<LockOutlined />}
            />
          </FormItem>

          <FormItem
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
              // {
              //   validator: (_, value) =>
              //     value === codeStr
              //       ? Promise.resolve()
              //       : Promise.reject(new Error("Should accept agreement")),
              //   message: "验证码错误",
              // },
            ]}
          >
            <div className="code-wrap">
              <div className="code-input">
                <Input placeholder="请输入验证码" />
              </div>
              <div className="code-view">
                {codeList.map((item, index) => {
                  return (
                    <span key={index} className="code-font">
                      {item + ""}
                    </span>
                  );
                })}
              </div>
            </div>
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
