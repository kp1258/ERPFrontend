import React, { useContext } from "react";
import CustomProductCard from "./CustomProductC";
import { CardDivider } from "../Dividers";
import { customProducts } from "../../Api/erpApi";
import { PopconfirmButton } from "../Buttons";
import { UserContext } from "../../Contexts/UserContext";

const CustomProductOrderedCard = (props) => {
  const user = useContext(UserContext);
  const { customProduct } = props;
  const handleClick = () => {
    var status = "w przygotowaniu";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    customProducts
      .acceptToRealization(user.userId, customProduct.customProductId, patch)
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
