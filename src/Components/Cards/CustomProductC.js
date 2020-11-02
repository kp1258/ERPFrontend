import React from "react";
import { Card } from "antd";
import { CardDivider, OrderDetails } from "../Others";
const CustomProductCard = (props) => {
  const { customProduct } = props;
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
        <CardDivider content="Status" />
        <span>{customProduct.status}</span>
        {props.footer ? props.footer : ""}
      </Card>
    </div>
  );
};

export default CustomProductCard;
