import React from "react";
import { Space, Button } from "antd";
import ClientAdminCard from "./ClientAdminC";
const ClientSalesmanCard = (props) => {
  const { client } = props;
  const footer = (
    <Space>
      <Button type="primary">Edytuj dane</Button>
      <Button type="primary">Zmień status</Button>
    </Space>
  );
  return (
    <div>
      <ClientAdminCard client={client} footer={footer} />
    </div>
  );
};

export default ClientSalesmanCard;
