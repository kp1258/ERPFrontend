import React from "react";
import { MaterialWarehouseCard } from "../../Components/Cards";
const materials = [
  {
    id: 1,
    name: "Materiał",
    quantity: 50,
  },
];
const ShowMaterialWarehousePage = () => {
  return (
    <div>
      {materials.map((material) => (
        <MaterialWarehouseCard id={material.id} material={material} />
      ))}
    </div>
  );
};

export default ShowMaterialWarehousePage;
