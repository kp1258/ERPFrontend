import React from "react";
import { CustomProductCard } from "../../Components/Cards";
import { customProducts } from "../../Utils/Data";
import { Space } from "antd";
const CustomProductsHistoryTechnologistsPage = () => {
  return (
    <div>
      <Space>
        {customProducts.map((customProduct) => (
          <CustomProductCard customProduct={customProduct} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsHistoryTechnologistsPage;
