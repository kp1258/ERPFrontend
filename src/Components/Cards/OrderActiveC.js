import React from "react";
import { OrderTimeline } from "../Timelines";
import { CardDivider } from "../Dividers";
import { OrderWithTabsCard } from "../Cards";
import {
  CustomOrderItemStatusList,
  StandardOrderItemStatusList,
} from "../Lists";

const OrderActiveCard = ({ order }) => {
  const content = (
    <>
      <CardDivider content="Zawartość zamówienia" />
      {order.type !== "Standardowy" ? (
        <CustomOrderItemStatusList items={order.customOrderItems} />
      ) : (
        <StandardOrderItemStatusList items={order.standardOrderItemDetails} />
      )}
      <CardDivider content="Historia realizacji" />
      <OrderTimeline order={order} />
    </>
  );
  return <OrderWithTabsCard order={order} tabContent={content} />;
};

export default OrderActiveCard;
