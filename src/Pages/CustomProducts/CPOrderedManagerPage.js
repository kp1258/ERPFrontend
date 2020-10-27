import React from "react";
import { Space } from "antd";
import { CustomOrderItemOrderedCard } from "../../Components/Cards";
import { customOrderItems } from "../../Utils/Data";
const CustomProductsOrderedManagerPage = () => {
  return (
    <div>
      <Space>
        {customOrderItems.map((item) => (
          <CustomOrderItemOrderedCard item={item} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsOrderedManagerPage;
