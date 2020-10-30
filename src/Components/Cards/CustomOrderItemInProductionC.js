import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { Button } from "antd";
import { CardDivider } from "../Others";
const CustomOrderItemInProductionCard = (props) => {
  const { item } = props;
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <Button type="primary">Zakończ produkcję</Button>
    </>
  );
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemInProductionCard;
