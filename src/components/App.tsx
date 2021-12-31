import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import Employee from './employee';
import Setting from './setting';
import './App.css';

const { Header, Content, Footer } = Layout;

const getDefaultKey = (urlMatch: any) => urlMatch && urlMatch.url.replace('/', '') || 'employee';

const App = ({match}: any) => (
  <ConfigProvider locale={zh_CN}>
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[getDefaultKey(match)]}
          className="menu"
        >
          <Menu.Item key="employee">
            <Link to="/employee">员工管理</Link>
          </Menu.Item>
          <Menu.Item key="setting">
            <Link to="/setting">系统设置</Link>
          </Menu.Item>
        </Menu>
      </Header>

      <Content className="contentWrap">
        <div className="content">
          <Routes>
            <Route path="/" element={<Employee />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </Content>

      <Footer className="footer">TypeScript</Footer>
    </Layout>
  </ConfigProvider>
);

export default App;
