import React from "react";
import {
  Card,
  CardImg,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import "./index.css";
const UserAdminCard = (props) => {
  return (
    <div className="userCard">
      <Card>
        <CardImg variant="top" />
        <Card.Header>
          {props.firstName} {props.lastName}
        </Card.Header>

        <ListGroup className="list-group-flush">
          <ListGroupItem>Numer telefonu: {props.phoneNumber}</ListGroupItem>
          <ListGroupItem>E-Mail: {props.eMail}</ListGroupItem>
          <ListGroupItem>Login: {props.login}</ListGroupItem>
          <ListGroupItem>Stanowisko: {props.role}</ListGroupItem>
          <ListGroupItem>Status: {props.status}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button>Edytuj</Button>
          <Button>Usuń</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserAdminCard;
