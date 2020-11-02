import React from "react";
import { Card } from "antd";
import { FileItem } from "../Buttons";
import { CardDivider, OrderDetails } from "../Others";

const CustomOrderItemCard = (props) => {
  const { item } = props;
  const { customProduct } = item;
  const { technologist } = customProduct;
  return (
    <div>
      <Card title={customProduct.name}>
        <OrderDetails product={customProduct} />
        {props.solution ? props.solution : ""}
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
