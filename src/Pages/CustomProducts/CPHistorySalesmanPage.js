import React from "react";
import { Space } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import { customOrderItems } from "../../Utils/Data";
const CustomProductsHistorySalesmanPage = () => {
  return (
    <div>
      <Space>
        {customOrderItems.map((item) => (
          <CustomOrderItemHistoryCard item={item} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsHistorySalesmanPage;
