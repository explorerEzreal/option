import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  Space,
  Input,
  Typography,
  Button,
  Modal,
  message,
  Row,
  Col,
} from "antd";
import AddVip from "./component/AddVip";
import { getAdress } from "../../resources/utils";
import "./style.css";

const { Search } = Input;
// const FormItem = Form.Item;

const data = [
  {
    id: "1",
    key: "1",
    name: "李蕾",
    sex: "女",
    birthday: "1998-01-18",
    adress: ["130000", "130300", "130301"],
    integral: 2560,
    phone: "19967832659",
  },
  {
    id: "2",
    key: "2",
    name: "萝莉",
    sex: "女",
    birthday: "1997-10-18",
    adress: ["130000", "130300", "130301"],
    integral: 2560,
    phone: "19967832659",
  },
  {
    id: "3",
    key: "3",
    name: "吕洞玄",
    sex: "男",
    birthday: "2000-11-18",
    adress: ["130000", "130300", "130301"],
    integral: 2560,
    phone: "19967832659",
  },
  {
    id: "4",
    key: "4",
    name: "宁姚",
    sex: "女",
    birthday: "2000-11-18",
    adress: ["130000", "130300", "130301"],
    integral: 2120,
    phone: "17754369754",
  },
  {
    id: "5",
    key: "5",
    name: "左右",
    sex: "女",
    birthday: "2000-11-18",
    adress: ["130000", "130300", "130301"],
    integral: 2120,
    phone: "17343420107",
  },
];

const Demo = () => {
  const [addVipVisible, setAddVipVisible] = useState(false);
  const [vipDetail, setVipDetail] = useState({});
  const [vipList, setVipList] = useState([]);

  const navigate = useNavigate();

  const getVipList = (value) => {
    const params = {
      id: value,
    };
    console.log(params);
    setVipList(data);
  };

  const onSearch = (value) => {
    getVipList(value);
  };

  // 编辑
  const onEdit = (value) => {
    console.log(value);
    setVipDetail(value);
    setAddVipVisible(true);
  };
  // 删除
  const onDelete = (id) => {
    console.log(id);
    Modal.confirm({
      title: "温馨提示",
      content: "该会员将被删除",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        message.success("删除成功");
      },
    });
  };
  // 跳转详情
  const onJumpDetail = (id) => {
    console.log(id);
    navigate("/memberEdit/detail");
  };
  // 表单提交
  // const onFinish = (value) => {
  //   console.log(value);
  // };

  // 打开弹窗
  const onOpenAddVip = () => {
    setAddVipVisible(true);
  };

  // 关闭弹窗
  const onCloseAddVip = () => {
    setAddVipVisible(false);
    setVipDetail({});
  };

  // 保存会员信息
  // const onSaveVipValue = (value) => {
  //   console.log(value);
  // };

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "生日",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "性别",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "地址",
      // dataIndex: "address",
      key: "adress",
      render: (record) => {
        const adressInfo = getAdress(record.adress);
        return <span>{adressInfo}</span>;
      },
    },
    {
      title: "积分",
      key: "integral",
      dataIndex: "integral",
    },
    {
      title: "电话",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "操作",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Typography.Link
            onClick={() => onEdit(record)}
            style={{
              marginRight: 8,
            }}
          >
            编辑
          </Typography.Link>

          <Typography.Link
            onClick={() => onDelete(record.key)}
            style={{
              marginRight: 8,
            }}
          >
            删除
          </Typography.Link>

          <Typography.Link
            onClick={() => onJumpDetail(record.key)}
            style={{
              marginRight: 8,
            }}
          >
            查看记录
          </Typography.Link>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getVipList(1);
  });
  return (
    <div className="c--vip-content">
      <div className="vip-search-content">
        <div className="vip-search">
          <Row>
            <Col span={8}>
              <Search
                placeholder="请输入手机号码"
                onSearch={onSearch}
                enterButton
              />
            </Col>
            <Col span={4}>
              <Button type="primary" onClick={onOpenAddVip}>
                添加会员
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      <div className="vip-table-content">
        <Table columns={columns} dataSource={vipList} />
      </div>

      {addVipVisible && (
        <AddVip closeAddVip={onCloseAddVip} vipDetail={vipDetail} />
      )}
    </div>
  );
};

export default Demo;
