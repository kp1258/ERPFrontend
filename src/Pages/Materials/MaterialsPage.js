import React, { useState } from "react";
import { MaterialInfoTable } from "../../Components/Tables";
import { EditMaterialModal } from "../../Components/Modals";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const MaterialsPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/materials",
  });
  const [visible, setVisible] = useState(false);
  const [material, setMaterial] = useState({ id: 0, name: "" });
  const handleChooseMaterial = (id) => {
    let materials = [...response];
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
      {isLoading === false ? (
        response !== "" ? (
          <>
            <MaterialInfoTable
              data={[...response]}
              handleClick={handleChooseMaterial}
            />
            {material.id !== 0 && visible === true && (
              <EditMaterialModal visible={visible} material={material} />
            )}
          </>
        ) : (
          <NoDataAlert content="Brak materiałów w bazie" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default MaterialsPage;
