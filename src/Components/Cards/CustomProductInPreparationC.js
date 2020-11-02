import React from "react";
import CustomProductCard from "./CustomProductC";
import { Button } from "antd";
import { CardDivider } from "../Others";
const CustomProductOrderedCard = (props) => {
  const { customProduct } = props;
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <Button
        onClick={() => {
          props.showModal();
          props.handleClick(customProduct.customProductId);
        }}
        type="primary"
      >
        Dodaj rozwiązanie
      </Button>
    </>
  );
  return <CustomProductCard customProduct={customProduct} footer={footer} />;
};

export default CustomProductOrderedCard;
