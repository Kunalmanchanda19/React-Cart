import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { paths } from '../../Routes/paths';

const { Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
    // textAlign: 'center',
    // color: '#fff',
    // height: 64,
    // paddingInline: 48,
    // lineHeight: '64px',
    // backgroundColor: '#4096ff',
    // display: 'flex',
     alignItems: 'center',
     backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
       margin:'1px',

       
    //    height:'59px'
  };
  
  const contentStyle: React.CSSProperties = {
    // textAlign: 'center',
    // minHeight: 120,
    // lineHeight: '120px',
    // color: '#fff',
    // backgroundColor: '#0958d9',
    padding: '0 50px'
  };
  
  const menuStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%', // Ensures the menu takes the full width of the header
  };

  const footerStyle: React.CSSProperties = {
    // textAlign: 'center',
    // color: '#fff',
    // backgroundColor: '#4096ff',
  };
  
  const layoutStyle = {
    // borderRadius: 8,
    // overflow: 'hidden',
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
    //  padding: '20px 24px 24px'
  };

  
const MainLayout: React.FC = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['']} style={menuStyle}>
          <Menu.Item key="1">
            <Link to={paths.PRODUCTS}>Products</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to=''>About Us </Link>
          </Menu.Item>
          
        </Menu>
      </Header>
      <Content  style={contentStyle}>
        <div className="site-layout-content" style={{ marginTop: '16px' }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={footerStyle}>E-Commerce Application ©2024</Footer>
    </Layout>
  );
};

export default MainLayout;
