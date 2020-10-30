import React from "react";
import OrderCard from "./OrderC";
import { OrderTimeline } from "../../Components/Timelines";
import { CardDivider } from "../../Components/Others";
import {
  CustomOrderItemList,
  StandardOrderItemList,
} from "../../Components/Lists";
const OrderHistoryCard = (props) => {
  const { order } = props;
  const content = (
    <>
      <CardDivider content="Zawartość zamówienia" />
      {order.type !== "standardowy" ? (
        <CustomOrderItemList items={order.customdOrderItems} />
      ) : (
        <StandardOrderItemList items={order.stadardOrderItems} />
      )}
    </>
  );
  const footer = (
    <>
      <CardDivider content="Historia realizacji" />
      <OrderTimeline order={order} />
    </>
  );
  return <OrderCard order={order} footer={footer} content={content} />;
};

export default OrderHistoryCard;
