import React from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CardDivider } from "../Others";
import { PopconfirmButton } from "../Buttons";
import { customOrderItems } from "../../Api/erpApi";
import { SolutionDetails } from "../../Components/Others";

const CustomOrderItemOrderedCard = (props) => {
  const { item } = props;
  const handleClick = () => {
    var status = "w produkcji";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    customOrderItems
      .acceptToProduction(3, item.customOrderItemId, patch)
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
      <PopconfirmButton name="Rozpocznij produkcję" handleClick={handleClick} />
    </>
  );
  return (
    <CustomOrderItemCard item={item} footer={footer} solution={solution} />
  );
};

export default CustomOrderItemOrderedCard;
