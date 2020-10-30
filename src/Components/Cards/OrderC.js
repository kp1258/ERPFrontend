import React from "react";
import { Card } from "antd";
import { CardDivider } from "../../Components/Others";
const OrderCard = (props) => {
  const { order } = props;
  const { client, salesman } = order;
  return (
    <Card>
      <CardDivider content="Klient" />
      <li>{client.companyName}</li>
      <li>
        {client.firstName} {client.lastName}
      </li>
      <li>{client.phoneNumber}</li>
      <li>{client.email}</li>
      <CardDivider content="Handlowiec" />
      <li>
        {salesman.firstName} {salesman.lastName}
      </li>
      <CardDivider content="Typ zamówienia" />
      <li>{order.type}</li>
      <CardDivider content="Status" />
      <li>{order.status}</li>
      {props.content ? props.content : ""}
      {props.footer ? props.footer : ""}
    </Card>
  );
};

export default OrderCard;
