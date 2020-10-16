import React, { useState } from "react";
import { MaterialInfoTable } from "../../Components/Tables";
import { EditMaterialForm } from "../../Components/Forms";
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
const EditMaterialPage = () => {
  const [visible, setVisible] = useState(false);
  const [material, setMaterial] = useState();
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
      <EditMaterialForm
        material={material}
        changeVisibility={changeVisibility}
      />
    </div>
  );
};

export default EditMaterialPage;
