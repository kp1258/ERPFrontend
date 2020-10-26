import React from "react";
import { Space } from "antd";
import { standardProducts } from "../../Utils/Data";
import { StandardProductAdminCard } from "../../Components/Cards";
const StandardProductsManagerPage = () => {
  return (
    <div>
      <Space>
        {standardProducts.map((product) => {
          return (
            <StandardProductAdminCard
              key={product.standardProductId}
              product={product}
            />
          );
        })}
      </Space>
    </div>
  );
};

export default StandardProductsManagerPage;
