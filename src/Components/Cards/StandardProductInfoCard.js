import React from "react";
import { Card } from "antd";
const StandardProductInfoCard = (props) => {
  const { product } = props;
  return (
    <div class="d-flex justify-content-center">
      <Card title={product.name}></Card>
    </div>
  );
};

export default StandardProductInfoCard;
