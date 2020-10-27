import React from "react";
import { Space } from "antd";
import { CustomProductOrderedCard } from "../../Components/Cards";
import { customProducts } from "../../Utils/Data";
const CustomProductsOrderedPage = () => {
  return (
    <div>
      <Space>
        {customProducts.map((customProduct) => (
          <CustomProductOrderedCard customProduct={customProduct} />
        ))}
      </Space>
    </div>
  );
};

export default CustomProductsOrderedPage;
