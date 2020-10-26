import { Button, Space } from "antd";
import React from "react";
import MaterialWarehouseCard from "./MaterialWarehouseCard";

const MaterialWarehouseChangeStockCard = (props) => {
  const { material, handleEntry, handleWithdrawal } = props;
  const footer = (
    <Space>
      <Button
        onClick={() => {
          handleEntry(material.id);
        }}
        type="primary"
      >
        Przyjmij
      </Button>
      <Button
        onClick={() => {
          handleWithdrawal(material.id);
        }}
        type="primary"
      >
        Wydaj
      </Button>
    </Space>
  );
  return (
    <div>
      <MaterialWarehouseCard material={material} footer={footer} />
    </div>
  );
};

export default MaterialWarehouseChangeStockCard;
