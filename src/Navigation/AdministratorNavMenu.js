import React from "react";
import { Nav, NavDropdown, Dropdown, NavItem, NavLink } from "react-bootstrap";
import "./index.css";
const AdministratorNavMenu = () => {
  return (
    <>
      <div className="navMenu">
        <Nav className="flex-column">
          <Nav.Link href="/home">Active</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic">
              Użytkownicy
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="black" id="dropdown-basic">
              Magazyn
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Produkty</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Materiały</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          ;
        </Nav>
      </div>
    </>
  );
};

export default AdministratorNavMenu;
