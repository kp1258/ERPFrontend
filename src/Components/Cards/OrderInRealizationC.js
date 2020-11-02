import React from "react";
import OrderCard from "./OrderC";
import { Button } from "antd";
import { CardDivider } from "../../Components/Others";
import {
  CustomOrderItemStatusList,
  StandardOrderItemStatusList,
} from "../../Components/Lists";
const OrderInRealizationCard = (props) => {
  const { order } = props;
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <Button type="primary">Zrealizuj zamówienie</Button>
    </>
  );
  const content = (
    <>
      <CardDivider content="Zawartość zamówienia" />
      {order.type !== "standardowy" ? (
        <CustomOrderItemStatusList items={order.customOrderItems} />
      ) : (
        <StandardOrderItemStatusList items={order.standardOrderItemDetails} />
      )}
    </>
  );
  return (
    <>
      <OrderCard order={order} footer={footer} content={content} />
    </>
  );
};

export default OrderInRealizationCard;
