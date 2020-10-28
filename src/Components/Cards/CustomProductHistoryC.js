import React from "react";
import CustomProductCard from "./CustomProductC";
import { Divide, Divider } from "antd";
import { CustomProductTimeline } from "../Timelines";
const CustomProductHistoryCard = (props) => {
  const { customProduct } = props;
  const footer = (
    <>
      <Divider>Historia realizacji</Divider>
      <CustomProductTimeline customProduct={customProduct} />
    </>
  );
  return <CustomProductCard customProduct={customProduct} footer={footer} />;
};

export default CustomProductHistoryCard;
