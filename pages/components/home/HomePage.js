import React, { useState } from "react";
// import 'antd/dist/antd.css';
// import './home.css';
import { Menu } from "antd";
import MenuProduct from "./menu/MenuProduct";
import MenuCart from "./menu/MenuCart";

const { SubMenu } = Menu;

const HomePage = () => {
  // show form products
  const [visible, setVisible] = useState(false);
  const showOption = () => {
    setVisible((visible) => !visible);
  };

  return (
    <>
      <Menu style={menuStyles} mode="horizontal" className="borderBottom">
        <Menu.Item>
          <img src={logo} className="logo" alt="logo" />
        </Menu.Item>
        <Menu.Item style={navbarStyles}>Get Started</Menu.Item>
        <Menu.Item onClick={showOption}>
          <Menu className="drop-down " mode="inline">
            <SubMenu style={navbarStyles} title="Products"></SubMenu>
          </Menu>
        </Menu.Item>
        <Menu.Item style={{ ...navbarStyles, color: "#D1461C" }}>
          Shop Bundles
        </Menu.Item>
        <Menu.Item className="cart">
          <MenuCart/>
        </Menu.Item>
      </Menu>
      {visible ? <MenuProduct /> : null}
    </>
  );
};

const menuStyles = {
  display: "flex",
  alignItems: "center",
  position: "relative",
};

const navbarStyles = {
  fontWeight: "700",
  fontSize: "14px",
  letterSpacing: "1.2px",
  color: "#666666",
  textTransform: "uppercase",
};

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Harrys_Logo.svg/1280px-Harrys_Logo.svg.png";

export default HomePage;
