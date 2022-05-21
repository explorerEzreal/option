import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { login } from "../api";
import { useDebounceFn } from "../../../resources/utils";
import "./style.css";

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const ModifyPwd = () => {
  const [form] = Form.useForm();
  const userPhone = localStorage.getItem("phone");
  const [isTrue, setIsTrue] = useState(false);

  const getPassword = async (params) => {
    const { data } = await login(params);
    setIsTrue(data.code === 0);
  };

  const onPasswordChange = useDebounceFn((value) => {
    const params = {
      userPhone,
      userPassword: value.target.value,
    };
    getPassword(params);
  }, 1000);

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="p-modifyPwd-content">
      <div className="modiormontent">
        <Form form={form} onFinish={onSubmit}>
          <FormItem
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入原密码",
              },
            ]}
            name="originalPassword"
            label="原密码"
          >
            <Input onChange={onPasswordChange} placeholder="请输入原密码" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入新密码",
              },
            ]}
            name="newPassword"
            label="新密码"
          >
            <Input disabled={!isTrue} placeholder="请输入新密码" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请确认新密码",
              },
            ]}
            name="confirm"
            label="确认新密码"
          >
            <Input disabled={!isTrue} placeholder="请确认新密码" />
          </FormItem>

          <div className="mod-btn-wrap">
            <Button type="primary" htmlType="submit">
              保存
            </Button>
            <Button
              onClick={() => {
                // // eslint-disable-next-line no-underscore-dangle
                // window.__HIS_MCH_HISTORY__.push("/accuratePush/list");
              }}
            >
              取消
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default ModifyPwd;
