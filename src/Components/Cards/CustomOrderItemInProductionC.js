import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CardDivider } from "../Dividers";
import { PopconfirmButton } from "../Buttons";
import { customOrderItems } from "../../Api/erpApi";

const CustomOrderItemInProductionCard = (props) => {
  const { item } = props;
  const handleClick = () => {
    var status = "zrealizowany";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    customOrderItems
      .complete(3, item.customOrderItemId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
      })
      .catch((err) => console.log(err));
  };
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <PopconfirmButton name="Zakończ produkcję" handleClick={handleClick} />
    </>
  );
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemInProductionCard;
