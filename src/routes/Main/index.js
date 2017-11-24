import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import styles from 'less/main.less';

function MainPage({collapsed, dispatch}) {
  const toggle = () => {
	dispatch({type: 'mainPage/toggleMenu', payload: {collapsed: !collapsed}});
  }
  return (
    <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
		  id="components-layout-demo-custom-trigger"
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
  );
}

MainPage.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(state=>{return {collapsed: state.mainPage.collapsed }})(MainPage);
