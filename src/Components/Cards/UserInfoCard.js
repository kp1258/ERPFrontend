import React from "react";
import { Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";
const UserInfoCard = (props) => {
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
          <ListGroupItem>Stanowisko: {props.role}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default UserInfoCard;
