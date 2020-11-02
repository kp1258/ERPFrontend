import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CustomOrderItemTimeline } from "../Timelines";
import { CardDivider, SolutionDetails } from "../Others";

const CustomOrderItemHistoryCard = (props) => {
  const { item } = props;
  const solution =
    item.customProduct.status === "prepared" ? (
      <SolutionDetails product={item.customProduct} />
    ) : (
      ""
    );

  const footer = (
    <>
      <CardDivider content="Historia realizacji" />
      <CustomOrderItemTimeline item={item} />
    </>
  );
  return (
    <CustomOrderItemCard item={item} footer={footer} solution={solution} />
  );
};

export default CustomOrderItemHistoryCard;
