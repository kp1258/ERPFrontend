import React from "react";
import { Button, Space } from "antd";
import ProductWarehouseCard from "./ProductWarehouseCard";
const ProductWarehouseChangeStockCard = (props) => {
  const { product, handleEntry, handleWithdrawal } = props;
  const footer = (
    <Space>
      <Button
        onClick={() => {
          handleEntry(product.id);
        }}
        type="primary"
      >
        Przyjmij
      </Button>
      <Button
        onClick={() => {
          handleWithdrawal(product.id);
        }}
        type="primary"
      >
        Wydaj
      </Button>
    </Space>
  );
  return (
    <div>
      <ProductWarehouseCard product={product} footer={footer} />
    </div>
  );
};

export default ProductWarehouseChangeStockCard;
