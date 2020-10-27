import { Button, Space } from "antd";
import React from "react";
import MaterialWarehouseCard from "./MaterialWarehouseC";

const MaterialWarehouseChangeStockCard = (props) => {
  const { item, handleEntry, handleWithdrawal } = props;
  const footer = (
    <Space>
      <Button
        onClick={() => {
          handleEntry(item.materialWarehouseItemId);
        }}
        type="primary"
      >
        Przyjmij
      </Button>
      <Button
        onClick={() => {
          handleWithdrawal(item.materialWarehouseItemId);
        }}
        type="primary"
      >
        Wydaj
      </Button>
    </Space>
  );
  return (
    <div>
      <MaterialWarehouseCard item={item} footer={footer} />
    </div>
  );
};

export default MaterialWarehouseChangeStockCard;
