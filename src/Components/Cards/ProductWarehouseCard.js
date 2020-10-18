import React from "react";
import { Card, CardImg, ListGroup, ListGroupItem } from "react-bootstrap";

const ProductWarehouseCard = (props) => {
  return (
    <div class="d-flex justify-content-center">
      <Card>
        <Card.Header>{props.product.name}</Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Wymiary: {props.product.dimensions}</ListGroupItem>
          <ListGroupItem>
            Kategoria: {props.product.category.name}
          </ListGroupItem>
          <ListGroupItem>Ilość: {props.product.quantity}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ProductWarehouseCard;
