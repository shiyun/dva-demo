import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
// import { Route, routerRedux } from 'dva/router';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import Page1 from './Page1/index'
import Summary from '../Summary'

import styles from 'less/main.less'

function MainPage({ match, history, collapsed, dispatch }) {
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
              <div onClick={()=>{history.push('/main/index')}}>
                <Icon type="user" />
                <span>nav 1</span>
              </div>
            </Menu.Item>
            <Menu.Item key="2">
              <div onClick={()=>history.push('/main/page1')}>
                <Icon type="video-camera" />
                <span>nav 2</span>
              </div>
            </Menu.Item>
            <Menu.Item key="3">
              <div onClick={()=>history.push('/login')}>
                <Icon type="upload" />
                <span>nav 3</span>
              </div>
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
            <Switch>
              <Route path="/main/index" component={Summary} />
              <Route path="/main/page1" component={Page1} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
  );
}

MainPage.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect(state=>({collapsed: state.mainPage.collapsed }))(MainPage);
