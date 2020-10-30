import React from "react";
import OrderCard from "./OrderC";
import { Button } from "antd";
import { CardDivider } from "../../Components/Others";
const OrderInRealizationCard = (props) => {
  const { order } = props;
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <Button type="primary">Zrealizuj zamówienie</Button>
    </>
  );
  return (
    <>
      <OrderCard order={order} footer={footer} />
    </>
  );
};

export default OrderInRealizationCard;
