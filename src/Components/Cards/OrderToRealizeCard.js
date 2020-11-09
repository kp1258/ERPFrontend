import React, { useContext, useState } from "react";
import { CardDivider } from "../Dividers";
import { PopconfirmButton } from "../Buttons";
import { OrderTimeline } from "../Timelines";
import { CustomOrderItemList, StandardOrderItemList } from "../Lists";
import { OrderWithTabsCard } from "../Cards";
import { orders } from "../../Api/erpApi";
import { UserContext } from "../../Contexts/UserContext";
import { handleResponse } from "../../Api/handleResponse";

const OrderToRealizeCard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(UserContext);
  const { order } = props;
  const handleClick = () => {
    setIsLoading(true);
    var status = "W realizacji";
    var patch = [{ op: "replace", path: "/status", value: `${status}` }];
    orders
      .acceptToRealization(user.userId, order.orderId, patch)
      .then((res) => {
        console.log(res);
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie przyjęto zamówienie do realizacji");
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
        name="Przyjmij do realizacji"
        handleClick={handleClick}
        loading={isLoading}
      />
    </>
  );
  const content = (
    <>
      <CardDivider content="Zawartość zamówienia" />
      {order.type !== "Standardowy" ? (
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
