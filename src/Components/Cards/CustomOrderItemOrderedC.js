import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { Button } from "antd";
const CustomOrderItemOrderedCard = (props) => {
  const { item } = props;
  const footer = <Button type="primary">Rozpocznij produkcję</Button>;
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemOrderedCard;
