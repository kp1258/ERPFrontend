import React, { useEffect, useState } from "react";
import { EditMaterialModal } from "../../Components/Modals";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { MaterialCard } from "../../Components/Cards";
import { Space } from "antd";

const MaterialsPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [material, setMaterial] = useState({ id: 0, name: "" });
  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: "/materials",
  });
  useEffect(() => {
    console.log("use effect triggered");
  }, [triggerUpdate]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };

  const handleChooseMaterial = (id) => {
    let materials = [...response];
    let chosenMaterial = materials.find((material) => {
      return material.materialId === id;
    });
    setVisible(true);
    setMaterial(chosenMaterial);
  };
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <>
              <Space>
                {[...response].map((material) => (
                  <MaterialCard
                    key={material.materialId}
                    material={material}
                    handleClick={handleChooseMaterial}
                  />
                ))}
              </Space>
              {material.materialId !== 0 && (
                <EditMaterialModal
                  visible={visible}
                  material={material}
                  toggleUpdate={toggleTrigger}
                  hideModal={() => setVisible(false)}
                />
              )}
            </>
          ) : (
            <NoDataAlert content="Brak materiałów w bazie" />
          )
        ) : (
          <NetworkErrorAlert />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default MaterialsPage;
