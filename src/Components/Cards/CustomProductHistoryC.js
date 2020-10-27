import React from "react";
import CustomProductCard from "./CustomProductC";
import { CustomProductTimeline } from "../Timelines";
const CustomProductHistoryCard = (props) => {
  const { customProduct } = props;
  const footer = <CustomProductTimeline customProduct={customProduct} />;
  return <CustomProductCard customProduct={customProduct} footer={footer} />;
};

export default CustomProductHistoryCard;
