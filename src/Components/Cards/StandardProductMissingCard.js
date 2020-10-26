import React from "react";
import { Space, Button, Divider } from "antd";
import StandardProductCard from "./StandardProductCard";
const StandardProductMissingCard = (props) => {
  const { product } = props;
  const footer = (
    <div>
      <Divider />
      <Divider style={{ color: "red" }}>Brakująca ilość</Divider>
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
