import React from "react";
import { Space } from "antd";
import { CustomOrderItemInProductionCard } from "../../Components/Cards";
import { customOrderItems } from "../../Utils/Data";

const CustomProductsInProductionPage = () => {
  return (
    <div>
      <Space>
        {customOrderItems.map((item) => (
          <CustomOrderItemInProductionCard item={item} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsInProductionPage;
