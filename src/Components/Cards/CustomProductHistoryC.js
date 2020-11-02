import React from "react";
import CustomProductCard from "./CustomProductC";
import { CardDivider, SolutionDetails } from "../Others";
import { CustomProductTimeline } from "../Timelines";
const CustomProductHistoryCard = (props) => {
  const { customProduct } = props;
  const solution =
    customProduct.status === "przygotowany" ? (
      <SolutionDetails product={customProduct} />
    ) : (
      ""
    );
  const footer = (
    <>
      <CardDivider content="Historia realizacji" />
      <CustomProductTimeline customProduct={customProduct} />
    </>
  );
  return (
    <CustomProductCard
      customProduct={customProduct}
      footer={footer}
      solution={solution}
    />
  );
};

export default CustomProductHistoryCard;
