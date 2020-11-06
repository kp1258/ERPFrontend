import React, { useEffect, useState } from "react";
import { MaterialWarehouseChangeStockCard } from "../../Components/Cards";
import { ChangeStockModal } from "../../Components/Modals";
import { Space } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const ChangeStockMaterialWarehousePage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState();
  const [type, setType] = useState();
  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: "/material-warehouse",
  });
  useEffect(() => {
    console.log("use effect triggered");
  }, [triggerUpdate, response]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };

  const handleChooseItem = (id) => {
    let items = [...response];
    let chosenItem = items.find((item) => {
      return item.materialWarehouseItemId === id;
    });
    setItem(chosenItem);
    setVisible(true);
    console.log(chosenItem);
  };
  const handleEntry = (id) => {
    handleChooseItem(id);
    setType("entry");
  };
  const handleWithdrawal = (id) => {
    handleChooseItem(id);
    setType("withdrawal");
  };
  const hideModal = () => {
    setVisible(false);
  };
  return (
    <div>
      {isLoading === false ? (
        <>
          {error === "" ? (
            response !== "" ? (
              <Space>
                {[...response].map((item) => (
                  <MaterialWarehouseChangeStockCard
                    key={item.materialWarehouseItemId}
                    item={item}
                    handleEntry={handleEntry}
                    handleWithdrawal={handleWithdrawal}
                  />
                ))}
              </Space>
            ) : (
              <NoDataAlert content="Brak materiałów w magazynie" />
            )
          ) : (
            <NetworkErrorAlert />
          )}
          {item ? (
            <ChangeStockModal
              visible={visible}
              title="Zmień stan materiału"
              name={item.material.name}
              item={item}
              type={type}
              warehouseType="material"
              hideModal={hideModal}
              toggleUpdate={toggleTrigger}
              titleLabel={type === "entry" ? "Przyjmij" : "Wydaj"}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ChangeStockMaterialWarehousePage;
