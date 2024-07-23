import React, { useContext, useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CartContext } from '../../context/CartContext';

import { paths } from "../../Routes/paths";
import { Badge, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './Layout.css'; // Ensure this file is imported
import { Margin } from "@mui/icons-material";

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  backgroundColor: "white",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  flexWrap: "wrap", // Allows items to wrap on smaller screens
};

const contentStyle: React.CSSProperties = {
  padding: "5px 20px",
  backgroundColor: 'white'
};

const menuStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  flex: 1,
  justifyContent: "center",
  margin: "0 20px",
  flexWrap: "wrap", // Allows menu items to wrap on smaller screens
};

const logoStyle = {
  height: "50px",
  width: "90px", // Adjust as needed
};

const iconButtonStyle = {
  transition: "transform 0.3s",
  color: "black",
  "&:hover": {
    backgroundColor: "transparent",
    transform: "scale(1.05)",
  },
  "&:focus, &:active": {
    backgroundColor: "transparent",
  },
};

const footerStyle = {
  backgroundColor: 'white',
  paddingTop: 20,
  display: 'flex',
  justifyContent: 'space-between', // Align items to the left and right
  alignItems: 'center', // Center items vertically
  paddingBottom: '20px', // Ensure there's padding at the bottom as well
  paddingLeft: '33px', // Add padding to the left
  paddingRight: '33px',
    borderTop: '1px solid #e0e0e0'

}

const MainLayout: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);
  
  return (
    <Layout>
      <Header style={headerStyle}>
        <img src="ShopEase logo.png" alt="Logo" style={logoStyle} />
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={menuStyle}
          className="menu"
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key={paths.PRODUCTS}>
            <Link to={paths.PRODUCTS}>All Products</Link>
          </Menu.Item>
          {/* <Menu.Item key={paths.ABOUT}>
            <Link to={paths.ABOUT}>About ShopEase</Link>
          </Menu.Item>
          <Menu.Item key={paths.CONTACT}>
            <Link to={paths.CONTACT}>Contact</Link>
          </Menu.Item> */}
        </Menu>
        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
          sx={iconButtonStyle}
        >
          <Badge badgeContent={totalItems} color="primary">
            <ShoppingCartIcon />
          </Badge>
          <Typography
            variant="h6"
            style={{ textDecoration: "none", color: "inherit" }}
            sx={{ marginX: 2 }}
          >
            Cart
          </Typography>
        </IconButton>
      </Header>
      <Content style={contentStyle}>
        <div className="site-layout-content" style={{ marginTop: "16px" }}>
          <Outlet />
        </div>
      </Content>
      <Footer className="footer" style={footerStyle}>
        <Typography>
        Shop Ease ©2024
        </Typography>
        <Typography>
          Designed with ❤️ by kunal Manchanda
        </Typography>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
