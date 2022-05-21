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
import { getProduct, editProduct } from "./api";

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
  const [vipList, setVipList] = useState([]);

  const navigate = useNavigate();

  const onGetProduct = async (id = "", status = "") => {
    const params = {
      id,
      status,
    };
    const { data } = await getProduct(params);

    setVipList(data.data);
  };

  const onSearch = (value) => {
    if (value === "") {
      onGetProduct(value);
      return;
    }
    onGetProduct(value * 1);
  };

  const onEditProduct = async (params) => {
    const { data } = await editProduct(params);

    onGetProduct();
  };

  // 下架
  const onDelete = (id, status) => {
    console.log(id);
    Modal.confirm({
      title: "温馨提示",
      content: status === "1" ? "该商品将会下架" : "该商品将会上架",
      okText: "确定",
      cancelText: "取消",
      onOk() {
        const params = {
          id,
          status: status === "1" ? "0" : "1",
        };
        onEditProduct(params);
        message.success("下架成功");
      },
    });
  };

  // 选择状态
  const onChange = (value) => {
    onGetProduct("", value);
  };

  const columns = [
    {
      title: "商品编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "商品名称",
      dataIndex: "name",
      key: "name",
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
      // dataIndex: "status",
      render: (record) => {
        return record.status === "1" ? "在售" : "已下架";
      },
    },
    {
      title: "操作",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Typography.Link
            onClick={() => onDelete(record.id, record.status)}
            style={{
              marginRight: 8,
            }}
          >
            {record.status === "1" ? "下架" : "上架"}
          </Typography.Link>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    onGetProduct();
  }, []);
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
                <Option value="">全部</Option>
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
