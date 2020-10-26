import React from "react";
import { ProductWarehouseCard } from "../../Components/Cards";
import { productWarehouse } from "../../Utils/Data";
import { Space } from "antd";
const ShowProductWarehousePage = () => {
  return (
    <div>
      <Space>
        {productWarehouse.map((product) => (
          <ProductWarehouseCard id={product.id} product={product} />
        ))}
      </Space>
    </div>
  );
};

export default ShowProductWarehousePage;
