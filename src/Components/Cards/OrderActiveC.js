import React from "react";
import OrderCard from "./OrderC";
import { OrderTimeline } from "../Timelines";
import { CardDivider } from "../Others";
import {
  CustomOrderItemStatusList,
  StandardOrderItemStatusList,
} from "../Lists";

const OrderActiveCard = ({ order }) => {
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
  const footer = (
    <>
      <CardDivider content="Historia realizacji" />
      <OrderTimeline order={order} />
    </>
  );
  return <OrderCard order={order} content={content} footer={footer} />;
};

export default OrderActiveCard;
