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
  Select,
} from "antd";
import { getAdress } from "../../resources/utils";

const { Search } = Input;
const { Option } = Select;
// const FormItem = Form.Item;

const data = [
  {
    productId: "1",
    productIdName: "小米屌丝手机",
    price: "1999",
    nums: 104,
    saleNums: 44,
    status: 1,
  },
  {
    productId: "2",
    productIdName: "小米屌丝手机",
    price: "1999",
    nums: 104,
    saleNums: 44,
    status: 1,
  },
  {
    productId: "3",
    productIdName: "小米屌丝手机",
    price: "1999",
    nums: 104,
    saleNums: 44,
    status: 1,
  },
  {
    productId: "4",
    productIdName: "小米屌丝手机",
    price: "1999",
    nums: 104,
    saleNums: 44,
    status: 1,
  },
  {
    productId: "5",
    productIdName: "小米屌丝手机",
    price: "1999",
    nums: 104,
    saleNums: 44,
    status: 1,
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

  // 选择状态
  const onChange = (value) => {
    console.log(value);
  };
  // 保存会员信息
  // const onSaveVipValue = (value) => {
  //   console.log(value);
  // };

  const columns = [
    {
      title: "商品编号",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "商品名称",
      dataIndex: "productIdName",
      key: "productIdName",
    },
    {
      title: "商品价格",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "库存",
      dataIndex: "nums",
      key: "nums",
    },
    {
      title: "销售量",
      key: "saleNums",
      dataIndex: "saleNums",
    },
    {
      title: "状态",
      key: "status",
      dataIndex: "status",
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
            下架
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
                placeholder="请输入商品编号"
                onSearch={onSearch}
                enterButton
              />
            </Col>
            <Col span={8} push={8}>
              选择状态：
              <Select placeholder="选择商品的状态" onChange={onChange}>
                <Option value="1">未下架</Option>
                <Option value="0">已下架</Option>
              </Select>
              ,
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
