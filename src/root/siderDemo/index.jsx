import React, { useEffect } from "react";
import { useState } from "react";
import { Layout, Breadcrumb, Avatar, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import MyMenu from "../components/leftMenu/index";
import Path from "../components/path";
import { getMenu } from "../api";
import userPhoto from "../../resources/img/a50bd1b0b40edc325d4e0f026324b78.jpg";
import "./style.css";

const { Header, Content, Footer, Sider } = Layout;

const SiderDemo = () => {
  const [path, setPath] = useState("");
  const [path1, setPath1] = useState("");
  const [menuData, setMenuData] = useState([]);

  const navigate = useNavigate();

  const changePath = (title, path) => {
    const p = title.keyPath[0];
    const p1 = title.keyPath[1];
    const routePath = "/" + path;
    navigate(routePath);

    setPath(p);
    setPath1(p1);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={() => navigate("./login")}>退出</span>
      </Menu.Item>
    </Menu>
  );

  const getMunuList = async () => {
    const phone = localStorage.getItem("phone");
    const { data } = await getMenu({ phone });
    console.log("data", data);
    const list = data.data.list;
    const menuIDList = data.data.menu;
    const menuList = list.filter((item, index) => {
      if (menuIDList.includes(index + 1 + "")) {
        return item;
      }
    });

    const menuData = menuList.map((item) => {
      let kidPath = [];
      let kidTitle = [];
      kidPath = item.keyPath.split(",");
      kidTitle = item.keyTitle.split(",");
      const kidMenuDtat = kidTitle.map((subItem, index) => {
        return { title: subItem, path: kidPath[index] };
      });
      return { title: item.title, kidsMenu: kidMenuDtat };
    });
    setMenuData(menuData);
    // console.log(menuData);
  };

  useEffect(() => {
    getMunuList();
  }, []);

  // console.log(localStorage.getItem("phone"));
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

          <div className="userinfo-content">
            <Dropdown
              overlay={menu}
              placement="bottomLeft"
              arrow={{ pointAtCenter: true }}
            >
              <div className="outbtn">
                <Avatar size="large" src={userPhoto} />
              </div>
            </Dropdown>
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
