import React from "react";
import CustomProductCard from "./CustomProductC";
const CustomProductHistoryCard = (props) => {
  const { customProduct } = props;

  return <CustomProductCard customProduct={customProduct} />;
};

export default CustomProductHistoryCard;
