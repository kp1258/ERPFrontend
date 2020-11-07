import React, { useContext, useState } from "react";
import CustomOrderItemCard from "./CustomOrderItemC";
import { CardDivider } from "../Dividers";
import { PopconfirmButton } from "../Buttons";
import { customOrderItems } from "../../Api/erpApi";
import { UserContext } from "../../Contexts/UserContext";
import { handleResponse } from "../../Api/handleResponse";

const CustomOrderItemOrderedCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(UserContext);
  const { item } = props;
  const handleClick = () => {
    setIsLoading(true);
    var status = "W produkcji";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    customOrderItems
      .acceptToProduction(user.userId, item.customOrderItemId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie przyjęto pozycję do produkcji");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <PopconfirmButton
        name="Rozpocznij produkcję"
        handleClick={handleClick}
        loading={isLoading}
      />
    </>
  );
  return <CustomOrderItemCard item={item} footer={footer} />;
};

export default CustomOrderItemOrderedCard;
