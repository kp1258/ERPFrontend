import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { Button } from "antd";
import { CardDivider } from "../Others";
const CustomOrderItemOrderedCard = (props) => {
  const { item } = props;
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <Button type="primary">Rozpocznij produkcję</Button>
    </>
  );
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemOrderedCard;
