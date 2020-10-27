import React from "react";
import { Space } from "antd";
import { CustomProductInPreparationCard } from "../../Components/Cards";
import { customProducts } from "../../Utils/Data";
const CustomProductsInPreparationPage = () => {
  return (
    <div>
      <Space>
        {customProducts.map((customProduct) => (
          <CustomProductInPreparationCard customProduct={customProduct} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsInPreparationPage;
