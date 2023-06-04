import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import MenuNavbar from './components/MenuNavbar';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const { Content } = Layout;

const App: React.FC = () => {

  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#e6ba38',
        fontWeightStrong: 300,
        colorSplit: '#000000'
      },
      components: {
        Menu: {
          fontWeightStrong: 300
        }
      }
    }}>
      <Layout>
        <MenuNavbar />
        <Layout>
          <Content style={{ padding: '24px 16px 0', backgroundColor: '#ffffff'}}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;