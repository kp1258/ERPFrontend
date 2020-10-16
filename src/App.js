import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { AppBar, Footer, NavigationMenu, Page } from "./Main/index";

function App() {
  return (
    <div className="App">
      <Container>
        <Col>
          <Row>
            <AppBar />
          </Row>
          <Row>
            <NavigationMenu />
            <Page />
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
