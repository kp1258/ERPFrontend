import React, { useContext } from "react";
import { CardDivider } from "../Dividers";
import { PopconfirmButton } from "../Buttons";
import { OrderTimeline } from "../Timelines";
import { CustomOrderItemList, StandardOrderItemList } from "../Lists";
import { OrderWithTabsCard } from "../Cards";
import { orders } from "../../Api/erpApi";
import { UserContext } from "../../Contexts/UserContext";

const OrderToRealizeCard = (props) => {
  const user = useContext(UserContext);
  const { order } = props;
  const handleClick = () => {
    var status = "w realizacji";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    orders
      .acceptToRealization(user.userId, order.orderId, patch)
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
  const content = (
    <>
      <CardDivider content="Zawartość zamówienia" />
      {order.type !== "standardowy" ? (
        <CustomOrderItemList items={order.customOrderItems} />
      ) : (
        <StandardOrderItemList items={order.standardOrderItems} />
      )}
      <CardDivider content="Historia realizacji" />
      <OrderTimeline order={order} />
    </>
  );
  return (
    <>
      <OrderWithTabsCard order={order} footer={footer} tabContent={content} />
    </>
  );
};

export default OrderToRealizeCard;
