import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CardDivider } from "../Others";
import { PopconfirmButton } from "../Buttons";
import { customOrderItems } from "../../Api/erpApi";
import { SolutionDetails } from "../../Components/Others";

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
  const solution =
    item.customProduct.status === "przygotowany" ? (
      <SolutionDetails product={item.customProduct} />
    ) : (
      ""
    );

  const footer = (
    <>
      <CardDivider content="Akcje" />
      <PopconfirmButton name="Zakończ produkcję" handleClick={handleClick} />
    </>
  );
  return (
    <CustomOrderItemCard item={item} footer={footer} solution={solution} />
  );
};

export default CustomOrderItemInProductionCard;
