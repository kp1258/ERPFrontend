import React, { useEffect, useState } from "react";
import { materialWarehouse } from "../../Utils/Data";
import { MaterialWarehouseChangeStockCard } from "../../Components/Cards";
import { ChangeStockModal } from "../../Components/Modals";
import { Space } from "antd";
const ChangeStockMaterialWarehousePage = () => {
  const [visible, setVisible] = useState(false);
  const [material, setMaterial] = useState();
  const [type, setType] = useState();

  const handleChooseMaterial = (id) => {
    let materials = [...materialWarehouse];
    let chosenMaterial = materials.find((material) => {
      return material.id === id;
    });
    setMaterial(chosenMaterial);
    setVisible(true);
    console.log(chosenMaterial);
  };
  const handleEntry = (id) => {
    handleChooseMaterial(id);
    setType("entry");
  };
  const handleWithdrawal = (id) => {
    handleChooseMaterial(id);
    setType("withdrawal");
  };
  const hideModal = () => {
    setVisible(false);
  };
  return (
    <div>
      <Space>
        {materialWarehouse.map((material) => (
          <MaterialWarehouseChangeStockCard
            id={material.id}
            material={material}
            handleEntry={handleEntry}
            handleWithdrawal={handleWithdrawal}
          />
        ))}
      </Space>
      {material ? (
        <ChangeStockModal
          visible={visible}
          title="Zmień stan materiału"
          material={material}
          type={type}
          hideModal={hideModal}
          buttonLabel={type === "entry" ? "Przyjmij" : "Wydaj"}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ChangeStockMaterialWarehousePage;
