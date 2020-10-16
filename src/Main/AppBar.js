import React from "react";
import "./index.css";
import { Button, Navbar } from "react-bootstrap";
const AppBar = () => {
  return (
    <div className="appBar">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Button></Button>
        <Navbar.Brand>System ERP</Navbar.Brand>
        <div>Imię i nazwisko</div>
      </Navbar>
    </div>
  );
};

export default AppBar;
