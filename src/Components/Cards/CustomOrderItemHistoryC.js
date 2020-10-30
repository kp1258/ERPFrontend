import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CustomOrderItemTimeline } from "../Timelines";
import { CardDivider } from "../Others";

const CustomOrderItemHistoryCard = (props) => {
  const { item } = props;
  const footer = (
    <>
      <CardDivider content="Historia realizacji" />
      <CustomOrderItemTimeline item={item} />
    </>
  );
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemHistoryCard;
