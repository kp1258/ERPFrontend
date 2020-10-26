import React from "react";
import { Space } from "antd";
import { MaterialWarehouseCard } from "../../Components/Cards";
import { materialWarehouse } from "../../Utils/Data";

const ShowMaterialWarehousePage = () => {
  return (
    <div>
      <Space>
        {materialWarehouse.map((material) => (
          <MaterialWarehouseCard id={material.id} material={material} />
        ))}
      </Space>
    </div>
  );
};

export default ShowMaterialWarehousePage;
