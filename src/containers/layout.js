import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

const CustomLayout = (props) =>{
    return(
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            {
              props.isAuthenticated  ?
              <Menu.Item key="4"> <Link to='/login'>Logout</Link></Menu.Item>
              :
              <Menu.Item key="4"> <Link to='/login'>Login</Link></Menu.Item>
            }
            <Menu.Item key="1"><Link to=''>Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/Articles'>Articles</Link></Menu.Item>
            <Menu.Item key="3"> <Link to='/Friends'>Friends</Link></Menu.Item>
            
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
              {props.children}
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    
    );
}

export default CustomLayout;