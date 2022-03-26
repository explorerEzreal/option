import React from "react";
import { useState } from "react";
import { Layout, Breadcrumb, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import MyMenu from "../components/leftMenu/index";
import Path from "../components/path";
import logo from "../../resources/img/logo.png";
import "./style.css";

const { Header, Content, Footer, Sider } = Layout;

const menuData = [
  {
    title: "会员管理",
    kidsMenu: [
      {
        path: "memberEdit",
        title: "会员编辑",
      },
    ],
  },
  {
    title: "商品管理",
    kidsMenu: [
      {
        title: "商品列表",
        path: "productList",
      },
      {
        title: "商品编辑",
        path: "Product",
      },
    ],
  },
  {
    title: "订单管理",
    kidsMenu: [
      {
        title: "订单发货",
        path: "orderPost",
      },
    ],
  },
  {
    title: "系统管理",
    kidsMenu: [
      {
        title: "账号管理",
        path: "account",
      },
      {
        title: "修改密码",
        path: "modifyPwd",
      },
      {
        title: "个人中心",
        path: "personal",
      },
    ],
  },
];

const SiderDemo = () => {
  const [path, setPath] = useState("");
  const [path1, setPath1] = useState("");

  const navigate = useNavigate();

  const changePath = (title, path) => {
    const p = title.keyPath[0];
    const p1 = title.keyPath[1];
    const routePath = "/" + path;

    console.log(path);
    navigate(routePath);

    setPath(p);
    setPath1(p1);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible theme="light">
        <div className="logo">
          <p>
            <span className="g">s</span>
            <span className="o1">Q</span>
            <span className="o2">m</span>
            <span className="g">g</span>
            <span className="l">y</span>
            <span className="e">t</span>
          </p>
        </div>

        <MyMenu menuData={menuData} changePath={changePath} />
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Breadcrumb style={{ textAlign: "left", margin: "16px", width: 200 }}>
            <Breadcrumb.Item>{path1}</Breadcrumb.Item>
            <Breadcrumb.Item>{path}</Breadcrumb.Item>
          </Breadcrumb>

          <div style={{ width: 150 }}>
            欢迎，
            <Avatar
              style={{
                backgroundColor: "rgb(66, 133, 244)",
                verticalAlign: "middle",
              }}
              size="large"
            >
              ezreal
            </Avatar>
          </div>
        </Header>

        <Content style={{ margin: "16px 16px" }}>
          <div className="site-layout-background" style={{ minHeight: 360 }}>
            <Path />
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>马什么梅？</Footer>
      </Layout>
    </Layout>
  );
};

export default SiderDemo;
