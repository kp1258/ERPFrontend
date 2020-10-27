import React, { useState } from "react";
import { materialWarehouse } from "../../Utils/Data";
import { MaterialWarehouseChangeStockCard } from "../../Components/Cards";
import { ChangeStockModal } from "../../Components/Modals";
import { Space } from "antd";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const ChangeStockMaterialWarehousePage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/material-warehouse",
  });
  console.log(response);
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState();
  const [type, setType] = useState();

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
          <Space>
            {response.map((item) => (
              <MaterialWarehouseChangeStockCard
                key={item.materialWarehouseItemId}
                item={item}
                handleEntry={handleEntry}
                handleWithdrawal={handleWithdrawal}
              />
            ))}
          </Space>
          {item ? (
            <ChangeStockModal
              visible={visible}
              title="Zmień stan materiału"
              name={item.material.name}
              item={item}
              type={type}
              hideModal={hideModal}
              buttonLabel={type === "entry" ? "Przyjmij" : "Wydaj"}
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
