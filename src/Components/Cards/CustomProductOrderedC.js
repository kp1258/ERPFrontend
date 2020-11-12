import React, { useContext, useState } from "react";
import CustomProductCard from "./CustomProductC";
import { CardDivider } from "../Dividers";
import { customProducts } from "../../Api/erpApi";
import { PopconfirmButton } from "../Buttons";
import { UserContext } from "../../Contexts/UserContext";
import { handleResponse } from "../../Api/handleResponse";

const CustomProductOrderedCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(UserContext);
  const { customProduct } = props;
  const handleClick = () => {
    setIsLoading(true);
    var status = "W przygotowaniu";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    customProducts
      .acceptToRealization(user.userId, customProduct.customProductId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie przyjęto produkt do realizacji");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak");
      })
      .finally(() => setIsLoading(false));
  };
  const footer = (
    <>
      <CardDivider content="Akcje" />
      <PopconfirmButton
        name="Rozpocznij realizację"
        handleClick={handleClick}
        loading={isLoading}
      />
    </>
  );
  return <CustomProductCard customProduct={customProduct} footer={footer} />;
};

export default CustomProductOrderedCard;
