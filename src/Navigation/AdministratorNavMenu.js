import React from "react";
import {
  Nav,
  NavDropdown,
  Dropdown,
  NavItem,
  NavLink,
  ListGroup,
  Button,
  Card,
  Accordion,
} from "react-bootstrap";
import "./index.css";
import Collapsible from "react-collapsible";
const style = {
  backgroundColor: "15px",
};
const AdministratorNavMenu = () => {
  return (
    <>
      <div className="navMenu">
        {/* <Nav className="flex-column"> */}
        {/* <div className="collapseItem">
          <Collapsible trigger="Pracownicy" triggerStyle={style}>
            <NavItem>
              <NavLink>Przeglądaj</NavLink>
            </NavItem>
            <NavItem>
              <Button>Dodaj</Button>
            </NavItem>
          </Collapsible>
        </div>
        <div className="collapseItem">
          <Collapsible trigger="Magazyn"></Collapsible>
        </div>

        <div className="collapseItem">
          <Collapsible trigger="Zamówienia">
            <NavLink>Nav</NavLink>
          </Collapsible>
        </div>

        <div className="collapseItem">
          <Collapsible trigger="Produkty standardowe">
            <NavLink>Nav</NavLink>
          </Collapsible>
        </div>

        <div className="collapseItem">
          <Collapsible trigger="Produkty na zamówienie">
            <NavLink>Nav</NavLink>
          </Collapsible>
        </div> */}

        {/* </Nav> */}

        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Click me!
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </>
  );
};

export default AdministratorNavMenu;
