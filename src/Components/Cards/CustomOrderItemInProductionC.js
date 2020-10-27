import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { Button } from "antd";
const CustomOrderItemInProductionCard = (props) => {
  const { item } = props;
  const footer = <Button type="primary">Zakończ produkcję</Button>;
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemInProductionCard;
