import React from "react";
import { Form, Input, Button } from "antd";

import "./style.css";

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const ModifyPwd = () => {
  const [form] = Form.useForm();

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
            <Input placeholder="请输入原密码" />
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
            <Input placeholder="请输入新密码" />
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
            <Input placeholder="请确认新密码" />
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
