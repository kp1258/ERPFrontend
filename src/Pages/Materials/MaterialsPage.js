import React, { useState } from "react";
import { MaterialInfoTable } from "../../Components/Tables";
import { EditMaterialForm } from "../../Components/Forms";
import { EditMaterialModal } from "../../Components/Modals";
const materialsData = [
  {
    id: 1,
    name: "Materiał 1",
  },
  {
    id: 2,
    name: "Materiał 2",
  },
];
const MaterialsPage = () => {
  const [visible, setVisible] = useState(false);
  const [material, setMaterial] = useState({ id: 0, name: "" });
  const handleChooseMaterial = (id) => {
    let materials = [...materialsData];
    let chosenMaterial = materials.find((material) => {
      return material.id === id;
    });
    setVisible(true);
    setMaterial(chosenMaterial);
  };
  const changeVisibility = () => {
    setVisible(false);
  };
  return (
    <div>
      <MaterialInfoTable
        data={materialsData}
        handleClick={handleChooseMaterial}
      />
      {material.id !== 0 && visible === true && (
        <EditMaterialModal visible={visible} material={material} />
      )}
    </div>
  );
};

export default MaterialsPage;
