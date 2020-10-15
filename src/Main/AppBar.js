import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const AppBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand>System ERP</Navbar.Brand>
        <div>Imię i nazwisko</div>
      </Navbar>
    </>
  );
};

export default AppBar;
