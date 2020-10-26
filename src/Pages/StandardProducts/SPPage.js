import React from "react";
import { Space } from "antd";
import { StandardProductCard } from "../../Components/Cards";
import { standardProducts } from "../../Utils/Data";

const StandardProductsPage = () => {
  return (
    <div>
      <Space>
        {standardProducts.map((product) => {
          return (
            <StandardProductCard
              key={product.standardProductId}
              product={product}
            />
          );
        })}
      </Space>
    </div>
  );
};

export default StandardProductsPage;
