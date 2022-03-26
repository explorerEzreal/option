import React, { useEffect } from "react";
import { Modal, Form, Input, message, DatePicker, Radio, Cascader } from "antd";
import moment from "moment";

import { provinceData } from "../../../../resources/adress";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const options = [
  { label: "男", value: "男" },
  { label: "女", value: "女" },
];

const format = "YYYY-MM-DD";
const AddVip = ({ closeAddVip, vipDetail }) => {
  const [form] = Form.useForm();

  // const [detail, setDetail] = useState({});

  const onSaveVipValue = async (value) => {
    console.log(value);
    message.success("添加成功");
    // const params = {
    //   ...value,
    //   birthday: moment(value.birthday).format(format), // 日期格式
    //   // birthday: moment(value.birthday).valueOf(), //时间戳
    // };

    closeAddVip();
  };
  //保存弹窗信息表单
  const onFormSubmit = () => {
    form.submit();
  };

  const onFinish = (value) => {
    // console.log(value);
    const params = {
      ...value,
      birthday: moment(value.birthday).format(format),
    };
    onSaveVipValue(params);
    // console.log(params);
  };

  const disabledDate = (current) => {
    return current && current > moment();
  };

  useEffect(() => {
    // console.log(provinceData);
    const newDetail = {
      ...vipDetail,
      birthday: moment(vipDetail.birthday),
      // address: ["130000", "130300", "130301"],
      // name: "吕洞玄",
      // phone: "19967832659",
      // sex: "男",
    };
    form.setFieldsValue(newDetail);
  });
  return (
    <Modal
      visible
      maskClosable
      title={vipDetail.name ? "编辑会员" : "添加会员"}
      width={600}
      onCancel={closeAddVip}
      onOk={onFormSubmit}
      cancelText="取消"
      okText="保存"
    >
      <div className="vip-form">
        <Form form={form} onFinish={onFinish} name="vipValue">
          <FormItem
            label="姓名"
            name="name"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入姓名",
              },
            ]}
          >
            <Input placeholder="请输入姓名" />
          </FormItem>

          <FormItem
            label="电话"
            name="phone"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入电话",
              },
            ]}
          >
            <Input placeholder="请输入电话" />
          </FormItem>

          <FormItem
            label="生日"
            name="birthday"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请选择生日",
              },
            ]}
          >
            <DatePicker disabledDate={disabledDate} placeholder="请选择日期" />
          </FormItem>

          <FormItem
            label="地址"
            name="adress"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请选择地址",
              },
            ]}
          >
            <Cascader options={provinceData}></Cascader>
          </FormItem>

          <FormItem
            label="性别"
            name="sex"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请选择性别",
              },
            ]}
          >
            <Radio.Group options={options}></Radio.Group>
          </FormItem>
        </Form>
      </div>
    </Modal>
  );
};
export default AddVip;
