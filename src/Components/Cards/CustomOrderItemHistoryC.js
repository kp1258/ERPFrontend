import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CustomOrderItemTimeline } from "../Timelines";

const CustomOrderItemHistoryCard = (props) => {
  const { item } = props;
  const footer = <CustomOrderItemTimeline item={item} />;
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemHistoryCard;
