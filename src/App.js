import React, { useContext } from "react";
import "./App.css";
import { NavigationMenu, Page, AppBar } from "./Main";
import { Layout } from "antd";
import { UserContext } from "./Contexts/UserContext";

const { Header, Sider, Content } = Layout;
function App() {
  const user = useContext(UserContext);
  const siderWidth = user.role !== "anonymous" ? 250 : 0;
  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Header className="header">
          <AppBar />
        </Header>
        <Layout>
          <Sider width={siderWidth}>
            <NavigationMenu />
          </Sider>
          <Layout style={{ padding: "24px 24px 24px", height: "100%" }}>
            <Content style={{ height: "100%" }}>
              <Page />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
