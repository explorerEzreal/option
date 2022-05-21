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
import { getMemberList, deleteMember } from "./api";
import "./style.css";

const { Search } = Input;

const Demo = () => {
  const [addVipVisible, setAddVipVisible] = useState(false);
  const [vipDetail, setVipDetail] = useState({});
  const [vipList, setVipList] = useState([]);

  // 获取列表数据
  const getVipList = async (phone = "") => {
    const params = {
      phone,
    };

    const { data } = await getMemberList(params);
    if (data.code === 0) {
      const list = data.data || [];
      const newList = list.map((item) => {
        const addressList = item.address.split(",");
        return { ...item, address: addressList, key: item.id };
      });

      setVipList(newList);
    }
  };

  // 删除会员
  const onDeleteMember = async (id) => {
    deleteMember({ id });
    getVipList();
  };

  // 搜索会员
  const onSearch = (phone) => {
    getVipList(phone);
  };

  // 编辑
  const onEdit = (value) => {
    setVipDetail(value);
    setAddVipVisible(true);
  };

  // 删除
  const onDelete = (id) => {
    Modal.confirm({
      title: "温馨提示",
      content: "该会员将被删除",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        onDeleteMember(id);
        message.success("删除成功");
      },
    });
  };

  // 打开弹窗
  const onOpenAddVip = () => {
    setAddVipVisible(true);
  };

  // 关闭弹窗
  const onCloseAddVip = () => {
    setAddVipVisible(false);
    setVipDetail({});
    getVipList();
  };

  useEffect(() => {
    getVipList();
  }, []);

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
      width: 100,
    },
    {
      title: "生日",
      dataIndex: "birthDay",
      key: "birthDay",
      width: 200,
    },
    {
      title: "性别",
      key: "sex",
      render: (record) => {
        return <span>{record.sex === "1" ? "男" : "女"}</span>;
      },
      width: 100,
    },
    {
      title: "地址",
      // dataIndex: "address",
      key: "address",
      render: (record) => {
        const adressInfo = getAdress(record.address);
        return <span>{adressInfo}</span>;
      },
      width: 400,
    },
    {
      title: "积分",
      key: "grand",
      dataIndex: "grand",
      width: 100,
    },
    {
      title: "电话",
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      width: 200,
    },
    {
      title: "操作",
      key: "id",
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
        </Space>
      ),
    },
  ];

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
                allowClear
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
        <Table
          columns={columns}
          dataSource={vipList}
          pagination={{ pageSize: 6 }}
        />
      </div>

      {addVipVisible && (
        <AddVip closeAddVip={onCloseAddVip} vipDetail={vipDetail} />
      )}
    </div>
  );
};

export default Demo;
