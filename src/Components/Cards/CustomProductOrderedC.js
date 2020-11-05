import React from "react";
import CustomProductCard from "./CustomProductC";
import { CardDivider } from "../Dividers";
import { customProducts } from "../../Api/erpApi";
import { PopconfirmButton } from "../Buttons";

const CustomProductOrderedCard = (props) => {
  const { customProduct } = props;
  const handleClick = () => {
    var status = "w przygotowaniu";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    customProducts
      .acceptToRealization(4, customProduct.customProductId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
      })
      .catch((err) => console.log(err));
  };
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <PopconfirmButton
        name="Rozpocznij realizację"
        handleClick={handleClick}
      />
    </>
  );
  return <CustomProductCard customProduct={customProduct} footer={footer} />;
};

export default CustomProductOrderedCard;
