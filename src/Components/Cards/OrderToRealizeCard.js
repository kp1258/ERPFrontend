import React from "react";
import { CardDivider } from "../Others";
import { PopconfirmButton } from "../Buttons";
import OrderCard from "./OrderC";
import { orders } from "../../Api/erpApi";
const OrderToRealizeCard = (props) => {
  const { order } = props;
  const handleClick = () => {
    var status = "w realizacji";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    orders
      .acceptToRealization(5, order.orderId, patch)
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
        name="Przyjmij do realizacji"
        handleClick={handleClick}
      />
    </>
  );
  return (
    <>
      <OrderCard order={order} footer={footer} />
    </>
  );
};

export default OrderToRealizeCard;
