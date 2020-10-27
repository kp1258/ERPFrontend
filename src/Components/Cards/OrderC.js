import React from "react";
import { Card, Divider } from "antd";
const OrderCard = (props) => {
  const { order } = props;
  const { client, salesman } = order;
  return (
    <Card>
      <Divider orientation="left">Klient</Divider>
      <li>{client.companyName}</li>
      <li>
        {client.firstName} {client.lastName}
      </li>
      <li>{client.phoneNumber}</li>
      <li>{client.email}</li>
      <Divider orientation="left">Handlowiec</Divider>
      <li>
        {salesman.firstName} {salesman.lastName}
      </li>
      <Divider orientation="left">Typ zamówienia</Divider>
      <li>{order.type}</li>
      <Divider orientation="left">Status</Divider>
      <li>{order.status}</li>
      {props.content ? props.content : ""}
      {props.footer ? props.footer : ""}
    </Card>
  );
};

export default OrderCard;
