import React from "react";
import { Space } from "antd";
import { CenteredDivider } from "../Dividers";
const ClientInfo = ({ client }) => {
  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <div style={{ width: "500px" }}>
        <CenteredDivider content="Dane klienta" />
        <Space direction="vertical">
          <span>{client.companyName}</span>
          <span>
            {client.clientId ? `${client.firstName} ${client.lastName}` : ""}
          </span>
          <span>{client.phoneNumber}</span>
          <span>{client.email}</span>
        </Space>
        <CenteredDivider content="Adres" />
        <Space direction="vertical">
          <span>{client.address.street}</span>
          <span>{client.address.city}</span>
          <span>{client.address.postalCode}</span>
        </Space>
        <CenteredDivider content="Status" />
        <Space direction="vertical">
          <span>{client.status}</span>
        </Space>
      </div>
    </div>
  );
};

export default ClientInfo;
