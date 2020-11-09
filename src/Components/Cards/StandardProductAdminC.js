import React, { useState } from "react";
import { Button, Space } from "antd";
import StandardProductCard from "./StandardProductC";
import { PopconfirmButton } from "../../Components/Buttons";
import { standardProducts } from "../../Api/erpApi";
import { handleResponse } from "../../Api/handleResponse";

const StandardProductAdminCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { product } = props;
  console.log(product);
  const handleClick = () => {
    setIsLoading(true);
    var status =
      product.status === "Produkowany" ? "Wycofany z produkcji" : "Produkowany";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    standardProducts
      .changeStatus(product.standardProductId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie zmieniono status produktu");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak");
      })
      .finally(() => setIsLoading(false));
  };
  const footer = (
    <Space>
      <Button
        onClick={() => {
          props.showModal();
          props.handleClick(product.standardProductId);
        }}
        type="primary"
      >
        Edytuj dane
      </Button>
      <PopconfirmButton name="Zmień status" handleClick={handleClick} />
    </Space>
  );
  return (
    <StandardProductCard
      product={product}
      footer={footer}
      loading={isLoading}
    />
  );
};

export default StandardProductAdminCard;
