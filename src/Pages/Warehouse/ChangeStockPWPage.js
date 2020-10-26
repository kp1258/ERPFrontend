import React, { useState } from "react";
import { ChangeStockModal } from "../../Components/Modals";
import { productWarehouse } from "../../Utils/Data";
import { ProductWarehouseChangeStockCard } from "../../Components/Cards";
import { Space } from "antd";

const ChangeStockProductWarehousePage = () => {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState();
  const [type, setType] = useState();

  const handleChooseMaterial = (id) => {
    let products = [...productWarehouse];
    let chosenProduct = products.find((material) => {
      return material.id === id;
    });
    setProduct(chosenProduct);
    setVisible(true);
    console.log(chosenProduct);
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
        {productWarehouse.map((product) => (
          <ProductWarehouseChangeStockCard
            id={product.id}
            product={product}
            handleEntry={handleEntry}
            handleWithdrawal={handleWithdrawal}
          />
        ))}
      </Space>
      {product ? (
        <ChangeStockModal
          visible={visible}
          title="Zmień stan produktu"
          item={product}
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

export default ChangeStockProductWarehousePage;
