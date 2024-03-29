import React from "react";
import { Card, Space } from "antd";
import { CenteredDivider } from "../Dividers";
import { inactiveCardColor } from "../../Utils/sharedStyles";
const ClientCard = (props) => {
  const { client } = props;
  const color = client.status === "Nieaktywny" ? inactiveCardColor : "";
  const hoverable = client.status === "Nieaktywny" ? false : true;
  return (
    <div>
      <Card
        title="Dane klienta"
        hoverable={hoverable}
        style={{ backgroundColor: color }}
      >
        <Space direction="vertical">
          <li>{client.companyName}</li>
          <li>
            {client.clientId ? `${client.firstName} ${client.lastName}` : ""}
          </li>
          <li>{client.phoneNumber}</li>
          <li>{client.email}</li>
        </Space>
        <CenteredDivider content="Adres" />
        <Space direction="vertical">
          <li>{client.address.street}</li>
          <li>{client.address.city}</li>
          <li>{client.address.postalCode}</li>
        </Space>
        <CenteredDivider content="Status" />
        {client.status}
        {props.footer ? props.footer : ""}
      </Card>
    </div>
  );
};

export default ClientCard;
