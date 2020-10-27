import React, { useState } from "react";
import { ChangeStockModal } from "../../Components/Modals";
import { ProductWarehouseChangeStockCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const ChangeStockProductWarehousePage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/product-warehouse",
  });
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState();
  const [type, setType] = useState();

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
          <Space>
            {response.map((item) => (
              <ProductWarehouseChangeStockCard
                key={item.productWarehouseItemId}
                item={item}
                handleEntry={handleEntry}
                handleWithdrawal={handleWithdrawal}
              />
            ))}
          </Space>
          {item ? (
            <ChangeStockModal
              visible={visible}
              title="Zmień stan produktu"
              name={item.standardProduct.name}
              item={item}
              type={type}
              hideModal={hideModal}
              buttonLabel={type === "entry" ? "Przyjmij" : "Wydaj"}
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
