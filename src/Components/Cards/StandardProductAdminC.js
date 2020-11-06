import React from "react";
import { Button, Space } from "antd";
import StandardProductCard from "./StandardProductC";
import { PopconfirmButton } from "../../Components/Buttons";
import { standardProducts } from "../../Api/erpApi";

const StandardProductAdminCard = (props) => {
  const { product } = props;
  console.log(product);
  const handleClick = () => {
    var status =
      product.status === "Produkowany" ? "Wycofany z produkcji" : "Produkowany";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    standardProducts
      .changeStatus(product.standardProductId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
      })
      .catch((err) => console.log(err));
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
  return <StandardProductCard product={product} footer={footer} />;
};

export default StandardProductAdminCard;
