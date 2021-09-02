import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.less'
//挂载antd所需
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
function FirstPage(){

    //antd
    const { Header, Content, Footer } = Layout;

    return (
        <div className={style.container}>
            {/* antd导航栏组件 */}
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' ,backgroundColor:'#fff'}}>
                    <div className="logo">
                        <img alt="知乎 LOGO" className={style.SignFlowHomepage_logo} src="https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png"/>
                    </div>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                        <Menu.Item key="4">nav 4</Menu.Item>
                    </Menu>
                    <div className={style.avatar_bar}>
                        <Avatar shape="square" size="small" icon={<UserOutlined />} />
                    </div>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default FirstPage;