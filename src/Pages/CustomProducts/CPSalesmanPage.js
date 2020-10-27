import React from "react";
import { Space } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import { customOrderItems } from "../../Utils/Data";
const CustomProductssalesmanPage = () => {
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

export default CustomProductssalesmanPage;
