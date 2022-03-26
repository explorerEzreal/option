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

import "./style.css";

const { Search } = Input;
// const FormItem = Form.Item;

const data = [
  {
    id: "1",
    name: "李蕾",
    status: "1",
    time: "2021-01-15 - 2022-01-05",
    phone: "19967832659",
    updateTime: "2021-01-15",
  },
  {
    id: "2",
    name: "李蕾",
    status: "1",
    time: "2021-01-15 - 2022-01-05",
    phone: "19967832659",
    updateTime: "2021-01-15",
  },
  {
    id: "3",
    name: "李蕾",
    status: "1",
    time: "2021-01-15 - 2022-01-05",
    phone: "19967832659",
    updateTime: "2021-01-15",
  },
  {
    id: "4",
    name: "李蕾",
    status: "1",
    time: "2021-01-15 - 2022-01-05",
    phone: "19967832659",
    updateTime: "2021-01-15",
  },
  {
    id: "5",
    name: "李蕾",
    status: "1",
    time: "2021-01-15 - 2022-01-05",
    phone: "19967832659",
    updateTime: "2021-01-15",
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

  // 打开弹窗
  const onOpenAddVip = () => {
    setAddVipVisible(true);
  };

  // 关闭弹窗
  const onCloseAddVip = () => {
    setAddVipVisible(false);
    setVipDetail({});
  };

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "电话",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "有效期",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "状态",
      // dataIndex: "status",
      key: "status",
      render: (record) => (record.status === "1" ? "正常" : "无效"),
    },
    {
      title: "创建时间",
      key: "updateTime",
      dataIndex: "updateTime",
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
            查看
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
                创建账号
              </Button>
            </Col>
          </Row>
        </div>
      </div>

      <div className="vip-table-content">
        <Table columns={columns} dataSource={vipList} />
      </div>
    </div>
  );
};

export default Demo;
