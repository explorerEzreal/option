import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  PayCircleOutlined,
  GiftOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import "./style.css";

const { SubMenu } = Menu;

const MyMenu = (props) => {
  const { menuData, changePath } = props;

  const handleClick = (e, path) => {
    changePath(e, path);
  };

  const getIcon = (title) => {
    if (title === "会员管理") {
      return <UserOutlined />;
    } else if (title === "商品管理") {
      return <GiftOutlined />;
    } else if (title === "订单管理") {
      return <PayCircleOutlined />;
    } else if (title === "系统管理") {
      return <SettingOutlined />;
    } else if (title === "首页") {
      return <HomeOutlined />;
    }
  };

  const onSubMenuClick = () => {
    const e = {
      keyPath: ["首页"],
    };
    changePath(e, "main");
  };

  return (
    <Menu theme="light" mode="inline">
      <Menu.Item icon={getIcon("首页")} onClick={onSubMenuClick} key={"sda"}>
        首页
      </Menu.Item>
      {menuData?.map((item) => {
        return (
          <SubMenu
            key={item.title}
            title={item.title}
            icon={getIcon(item.title)}
          >
            {item.kidsMenu?.map((kid) => {
              return (
                <Menu.Item
                  onClick={(e) => handleClick(e, kid.path)}
                  key={kid.title}
                >
                  {kid.title}
                </Menu.Item>
              );
            })}
          </SubMenu>
        );
      })}
    </Menu>
  );
};

export default MyMenu;
