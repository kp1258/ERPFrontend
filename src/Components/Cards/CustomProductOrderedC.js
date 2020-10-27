import React from "react";
import CustomProductCard from "./CustomProductC";
import { Button } from "antd";
const CustomProductOrderedCard = (props) => {
  const { customProduct } = props;
  const footer = <Button type="primary">Rozpocznij realizację</Button>;
  return <CustomProductCard customProduct={customProduct} footer={footer} />;
};

export default CustomProductOrderedCard;
