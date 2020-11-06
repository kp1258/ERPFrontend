import React, { useState, useEffect } from "react";
import { ChangeStockModal } from "../../Components/Modals";
import { ProductWarehouseChangeStockCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const ChangeStockProductWarehousePage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState();
  const [type, setType] = useState();
  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: "/product-warehouse",
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
      return item.productWarehouseItemId === id;
    });
    setItem(chosenItem);
    setVisible(true);
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
        <div>
          {error === "" ? (
            response !== "" ? (
              <Space>
                {[...response].map((item) => (
                  <ProductWarehouseChangeStockCard
                    key={item.productWarehouseItemId}
                    item={item}
                    handleEntry={handleEntry}
                    handleWithdrawal={handleWithdrawal}
                  />
                ))}
              </Space>
            ) : (
              <NoDataAlert content="Brak produktów w magazynie" />
            )
          ) : (
            <NetworkErrorAlert />
          )}
          {item ? (
            <ChangeStockModal
              visible={visible}
              title="Zmień stan produktu"
              name={item.standardProduct.name}
              item={item}
              type={type}
              warehouseType="product"
              hideModal={hideModal}
              toggleUpdate={toggleTrigger}
              titleLabel={type === "entry" ? "Przyjmij" : "Wydaj"}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ChangeStockProductWarehousePage;
