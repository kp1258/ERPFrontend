import React from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { customProducts } from "../../Utils/Data";
import { Space } from "antd";
const CustomProductsHistoryTechnologistsPage = () => {
  return (
    <div>
      <Space>
        {customProducts.map((customProduct) => (
          <CustomProductHistoryCard customProduct={customProduct} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsHistoryTechnologistsPage;
