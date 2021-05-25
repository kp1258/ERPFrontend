import React, { useState } from "react";
import { Card } from "antd";
import { CardDivider } from "../../Components/Dividers";
const OrderWithTabsCard = ({ order, tabContent, footer }) => {
  const { client, salesman } = order;
  const [activeKey, setActiveKey] = useState("tab1");
  const tabList = [
    {
      key: "tab1",
      tab: "Podstawowe informacje",
    },
    {
      key: "tab2",
      tab: "Szczegóły",
    },
  ];
  const contentList = {
    tab1: (
      <div>
        <CardDivider content="Klient" />
        <li>{client.companyName}</li>
        <li>
          {client.firstName} {client.lastName}
        </li>
        <li>{client.phoneNumber}</li>
        <li>{client.email}</li>
        <CardDivider content="Adres klienta" />
        <li>{client.address.street}</li>
        <li>{client.address.postalCode}</li>
        <li>{client.address.city}</li>
        <CardDivider content="Handlowiec" />
        <li>
          {salesman.firstName} {salesman.lastName}
        </li>
        <CardDivider content="Typ zamówienia" />
        <li>{order.type}</li>
        <CardDivider content="Status" />
        <li>{order.status}</li>
        {footer ? footer : ""}
      </div>
    ),
    tab2: <div>{tabContent}</div>,
  };
  return (
    <div style={{ height: "700px", minWidth: "450px" }}>
      <Card
        hoverable
        style={{
          width: "100%",
          margin: "auto",
          height: "100%",
        }}
        tabList={tabList}
        activeTabKey={activeKey}
        onTabChange={(key) => setActiveKey(key)}
      >
        {contentList[activeKey]}
      </Card>
    </div>
  );
};

export default OrderWithTabsCard;
