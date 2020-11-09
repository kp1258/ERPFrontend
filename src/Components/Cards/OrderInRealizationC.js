import React from "react";
import { Button } from "antd";
import { CardDivider } from "../Dividers";
import { OrderTimeline } from "../Timelines";
import { OrderWithTabsCard } from "../Cards";
import {
  CustomOrderItemStatusList,
  StandardOrderItemStatusList,
} from "../../Components/Lists";
const OrderInRealizationCard = ({ order, showModal, handleClick }) => {
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <Button
        onClick={() => {
          showModal();
          handleClick(order.orderId);
        }}
        type="primary"
      >
        Zrealizuj zamówienie
      </Button>
    </>
  );
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
  return (
    <>
      <OrderWithTabsCard order={order} footer={footer} tabContent={content} />
    </>
  );
};

export default OrderInRealizationCard;
