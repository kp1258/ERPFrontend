import React from "react";
import {
  Card,
  CardImg,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import "./index.css";

const MaterialInfoCard = (props) => {
  return (
    <div class="d-flex justify-content-center">
      <Card>
        <Card.Header>props.material.name</Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Ilość: {props.material.quantity}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default MaterialInfoCard;
