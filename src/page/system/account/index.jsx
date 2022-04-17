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
import { getUserList } from "../api";

import "./style.css";

const { Search } = Input;
// const FormItem = Form.Item;

// const data = [
//   {
//     id: "1",
//     name: "李蕾",
//     status: "1",
//     time: "2021-01-15 - 2022-01-05",
//     phone: "19967832659",
//     updateTime: "2021-01-15",
//   },
//   {
//     id: "2",
//     name: "李蕾",
//     status: "1",
//     time: "2021-01-15 - 2022-01-05",
//     phone: "19967832659",
//     updateTime: "2021-01-15",
//   },
//   {
//     id: "3",
//     name: "李蕾",
//     status: "1",
//     time: "2021-01-15 - 2022-01-05",
//     phone: "19967832659",
//     updateTime: "2021-01-15",
//   },
//   {
//     id: "4",
//     name: "李蕾",
//     status: "1",
//     time: "2021-01-15 - 2022-01-05",
//     phone: "19967832659",
//     updateTime: "2021-01-15",
//   },
//   {
//     id: "5",
//     name: "李蕾",
//     status: "1",
//     time: "2021-01-15 - 2022-01-05",
//     phone: "19967832659",
//     updateTime: "2021-01-15",
//   },
// ];

const Demo = () => {
  const [addVipVisible, setAddVipVisible] = useState(false);
  const [vipDetail, setVipDetail] = useState({});
  const [vipList, setVipList] = useState([]);

  const navigate = useNavigate();

  const getVipList = async (phone = "") => {
    const params = {
      phone,
    };

    const { data } = await getUserList(params);
    setVipList(data.data);
  };

  const onSearch = (value) => {
    getVipList(value);
  };

  // 编辑
  const onEdit = (value) => {
    console.log(value);
    navigate(`/personal?phone=${value.phone}`, {
      state: { phone: value.phone },
    });
  };

  // 创建用户
  const onOpenAddVip = () => {
    navigate("/personal");
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
      title: "昵称",
      dataIndex: "nickname",
      key: "nickname",
    },
    {
      title: "状态",
      // dataIndex: "status",
      key: "status",
      render: (record) => (record.status === "1" ? "启用" : "未启用"),
    },
    {
      title: "类型",
      key: "type",
      // dataIndex: "updateTime",
      render: (record) => (record.type === "0" ? "管理员" : "普通用户"),
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
    getVipList();
  }, []);
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
