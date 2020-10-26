import React from "react";
import { Space } from "antd";
import { CustomOrderItemCard } from "../../Components/Cards";
import { customOrderItems } from "../../Utils/Data";
const CustomProductsHistorySalesmanPage = () => {
  return (
    <div>
      <Space>
        {customOrderItems.map((item) => (
          <CustomOrderItemCard item={item} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsHistorySalesmanPage;
