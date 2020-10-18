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
const EditMaterialsPage = () => {
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
        <EditMaterialForm
          material={material}
          changeVisibility={changeVisibility}
        />
      )}
    </div>
  );
};

export default EditMaterialsPage;
