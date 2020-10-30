import React from "react";
import { Card, Divider } from "antd";
import { CardDivider } from "../Others";

const CustomOrderItemCard = (props) => {
  const { item } = props;
  const { customProduct } = item;
  const { technologist } = customProduct;
  return (
    <div>
      <Card title={customProduct.name}>
        <CardDivider content="Opis" />
        <span>{customProduct.description}</span>
        <CardDivider content="Technolog" />
        {technologist !== null ? (
          <>
            <span>
              {technologist.firstName} {technologist.lastName}
            </span>
          </>
        ) : (
          "Brak"
        )}
        <CardDivider content="Ilość" />
        <div>{item.quantity}</div>
        <CardDivider content="Status" />
        <div>{item.status}</div>
        {props.footer ? props.footer : ""}
      </Card>
    </div>
  );
};

export default CustomOrderItemCard;
