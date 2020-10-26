import React from "react";
import { StandardProductMissingCard } from "../../Components/Cards";
import { managerMissingProducts } from "../../Utils/Data";
import { Space } from "antd";
const MissingStandardProductsPage = () => {
  return (
    <div>
      <Space>
        {managerMissingProducts.map((product) => (
          <StandardProductMissingCard product={product} />
        ))}
      </Space>
    </div>
  );
};

export default MissingStandardProductsPage;
