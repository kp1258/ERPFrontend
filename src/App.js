import React from "react";
import "./App.css";
import { NavigationMenu, Page, AppBar } from "./Main";
import { Layout } from "antd";
import { UserContextProvider } from "./Contexts/UserContext";
import { TokenContextProvider } from "./Contexts/TokenContext";

const { Header, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <TokenContextProvider>
          <Layout style={{ height: "100vh" }}>
            <Header className="header">
              <AppBar />
            </Header>
            <Layout>
              <Sider width={250}>
                <NavigationMenu />
              </Sider>
              <Layout style={{ padding: "24px 24px 24px" }}>
                <Content>
                  <Page />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </TokenContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
