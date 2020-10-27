import React from "react";
import { Card, Divider, Space } from "antd";
const ClientAdminCard = (props) => {
  const { client } = props;
  return (
    <div>
      <Card title="Dane klienta">
        <Space direction="vertical">
          <li>{client.companyName}</li>
          <li>
            {client.clientId ? `${client.firstName} ${client.lastName}` : ""}
          </li>
          <li>{client.phoneNumber}</li>
          <li>{client.email}</li>
        </Space>
        <Divider plain>Adres</Divider>
        <Space direction="vertical">
          <li>{client.address.street}</li>
          <li>{client.address.city}</li>
          <li>{client.address.postalCode}</li>
        </Space>
        <Divider plain>Status</Divider>
        {client.status}
        <Divider />
        {props.footer ? props.footer : ""}
      </Card>
    </div>
  );
};

export default ClientAdminCard;
