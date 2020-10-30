import React from "react";
import CustomProductCard from "./CustomProductC";
import { CardDivider } from "../Others";
import { CustomProductTimeline } from "../Timelines";
const CustomProductHistoryCard = (props) => {
  const { customProduct } = props;
  const footer = (
    <>
      <CardDivider content="Historia realizacji" />
      <CustomProductTimeline customProduct={customProduct} />
    </>
  );
  return <CustomProductCard customProduct={customProduct} footer={footer} />;
};

export default CustomProductHistoryCard;
