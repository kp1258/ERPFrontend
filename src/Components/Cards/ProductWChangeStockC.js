import React from "react";
import { Button, Space } from "antd";
import ProductWarehouseCard from "./ProductWarehouseC";
const ProductWarehouseChangeStockCard = (props) => {
  const { item, handleEntry, handleWithdrawal } = props;
  const footer = (
    <Space>
      <Button
        onClick={() => {
          handleEntry(item.productWarehouseItemId);
        }}
        type="primary"
      >
        Przyjmij
      </Button>
      <Button
        onClick={() => {
          handleWithdrawal(item.productWarehouseItemId);
        }}
        type="primary"
      >
        Wydaj
      </Button>
    </Space>
  );
  return (
    <div>
      <ProductWarehouseCard item={item} footer={footer} />
    </div>
  );
};

export default ProductWarehouseChangeStockCard;
