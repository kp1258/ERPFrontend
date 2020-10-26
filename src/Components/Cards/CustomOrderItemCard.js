import React from "react";
import { Card, Divider } from "antd";
import { CustomOrderItemTimeline } from "../../Components/Timelines";
import { customProducts } from "../../Utils/Data";
const CustomOrderItemCard = (props) => {
  const { item } = props;
  const { customProduct } = item;
  const { technologist } = customProduct;
  return (
    <div>
      <Card title={customProduct.name}>
        <Divider>Opis</Divider>
        <span>{customProduct.description}</span>
        <Divider>Technolog</Divider>
        {technologist !== null ? (
          <>
            <span>
              {technologist.firstName} {technologist.lastName}
            </span>
          </>
        ) : (
          "Brak"
        )}
        <Divider>Ilość</Divider>
        <div>{item.quantity}</div>
        <Divider>Status</Divider>
        <div>{item.status}</div>
        <CustomOrderItemTimeline item={item} />
      </Card>
    </div>
  );
};

export default CustomOrderItemCard;
