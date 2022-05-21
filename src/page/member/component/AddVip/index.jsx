import React, { useEffect } from "react";
import { Modal, Form, Input, message, DatePicker, Radio, Cascader } from "antd";
import moment from "moment";
import { addMember, editMember } from "../../api";
import { provinceData } from "../../../../resources/adress";

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const options = [
  { label: "男", value: "1" },
  { label: "女", value: "0" },
];

const format = "YYYY-MM-DD";
const AddVip = ({ closeAddVip, vipDetail }) => {
  const [form] = Form.useForm();

  // 添加会员
  const onSaveVipValue = async (params) => {
    const { data } = await addMember(params);
    if (data.code === 0) {
      message.success(data.mse);
      closeAddVip();
      return;
    }
    message.error("系统错误");
  };

  // 修改会员信息
  const editVipInfo = async (params) => {
    const { data } = await editMember(params);
    if (data.code === 0) {
      message.success("修改成功");
      closeAddVip();
      return;
    }
    message.error("系统错误");
  };
  //保存弹窗信息表单
  const onFormSubmit = () => {
    form.submit();
  };

  const onFinish = (value) => {
    const params = {
      ...value,
      birthDay: moment(value.birthDay).format(format),
      address: `${value.address[0]},${value.address[1]},${value.address[2]}`,
    };

    // 1是修改 0是添加
    const editType = vipDetail.name ? "1" : "0";
    if (editType === "0") {
      onSaveVipValue(params);
      return;
    }
    editVipInfo(params);
  };

  const disabledDate = (current) => {
    return current && current > moment();
  };

  useEffect(() => {
    // console.log(provinceData);
    const newDetail = {
      ...vipDetail,
      birthDay: moment(vipDetail.birthDay),
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
            <Input placeholder="请输入姓名" allowClear />
          </FormItem>

          <FormItem
            label="电话"
            name="phoneNumber"
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
            label="积分"
            name="grand"
            {...formItemLayout}
            rules={[
              {
                required: true,
                message: "请输入积分",
              },
            ]}
          >
            <Input placeholder="请输入积分" />
          </FormItem>

          <FormItem
            label="生日"
            name="birthDay"
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
            name="address"
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
