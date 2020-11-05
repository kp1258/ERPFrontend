import React, { useContext } from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CardDivider } from "../Dividers";
import { PopconfirmButton } from "../Buttons";
import { customOrderItems } from "../../Api/erpApi";
import { UserContext } from "../../Contexts/UserContext";

const CustomOrderItemInProductionCard = (props) => {
  const user = useContext(UserContext);
  const { item } = props;
  const handleClick = () => {
    var status = "zrealizowany";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    customOrderItems
      .complete(user.userId, item.customOrderItemId, patch)
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
