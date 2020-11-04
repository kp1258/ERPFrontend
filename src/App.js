import React from "react";
import "./App.css";
import { NavigationMenu, Page } from "./Main";
import { Layout, Menu } from "antd";

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Header
          className="header"
          // style={{ position: "fixed", zIndex: 1, width: "100%" }}
        >
          <Menu theme="dark" mode="horizontal">
            <span>System ERP</span>
          </Menu>
        </Header>
        <Layout>
          <Sider width={250}>
            <NavigationMenu />
          </Sider>
          <Layout style={{ padding: "24px 24px 24px" }}>
            <Content
              style={{
                backgroundColor: "white",
              }}
            >
              <Page />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
