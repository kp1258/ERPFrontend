import React from "react";
import { OrderTimeline } from "..//Timelines";
import { CardDivider } from "..//Others";
import { OrderWithTabsCard } from "../Cards";
import { CustomOrderItemList, StandardOrderItemList } from "..//Lists";
const OrderHistoryCard = (props) => {
  const { order } = props;
  const content = (
    <>
      <CardDivider content="Zawartość zamówienia" />
      {order.type !== "standardowy" ? (
        <CustomOrderItemList items={order.customOrderItems} />
      ) : (
        <StandardOrderItemList items={order.standardOrderItems} />
      )}
      <CardDivider content="Historia realizacji" />
      <OrderTimeline order={order} />
    </>
  );
  return <OrderWithTabsCard order={order} tabContent={content} />;
};

export default OrderHistoryCard;
