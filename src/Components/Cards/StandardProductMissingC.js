import React from "react";
import { Divider } from "antd";
import StandardProductCard from "./StandardProductC";
const StandardProductMissingCard = (props) => {
  const { product } = props;
  const footer = (
    <div>
      <Divider />
      <Divider style={{ color: "red" }}>Brakująca liczba</Divider>
      <h4 style={{ color: "red" }}>{product.quantity}</h4>
    </div>
  );

  return (
    <div style={{ border: "1px solid red" }}>
      <StandardProductCard product={product.standardProduct} footer={footer} />
    </div>
  );
};

export default StandardProductMissingCard;
