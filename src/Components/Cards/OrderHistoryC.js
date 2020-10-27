import React from "react";
import OrderCard from "./OrderC";
import { Divider } from "antd";
import { OrderTimeline } from "../../Components/Timelines";
import {
  CustomOrderItemList,
  StandardOrderItemList,
} from "../../Components/Lists";
const OrderHistoryCard = (props) => {
  const { order } = props;
  const content = (
    <>
      <Divider orientation="left">Zawartość zamówienia</Divider>
      {order.type !== "standardowy" ? (
        <CustomOrderItemList items={order.customdOrderItems} />
      ) : (
        <StandardOrderItemList items={order.stadardOrderItems} />
      )}
    </>
  );
  const footer = (
    <>
      <Divider orientation="left">Historia realizacji</Divider>
      <OrderTimeline order={order} />
    </>
  );
  return <OrderCard order={order} footer={footer} content={content} />;
};

export default OrderHistoryCard;
