import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AppBar, NavigationMenu, Page } from "./Main/index";
import { Layout, Menu } from "antd";

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
          }}
        >
          <Menu theme="dark" mode="horizontal">
            <span>System ERP</span>
          </Menu>
        </Header>

        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            marginTop: "50px",
          }}
        >
          <NavigationMenu />
        </Sider>
        <Layout style={{ marginLeft: "200px" }}>
          <Content
            style={{
              padding: 24,
              minHeight: 600,
              height: "100vh",
            }}
          >
            <Page />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
