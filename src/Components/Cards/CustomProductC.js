import React, { useState } from "react";
import { Card } from "antd";
import { CardDivider } from "../Dividers";
import { OrderDetails } from "../Others";
import { SolutionDetails } from "../Others";
import { CustomProductTimeline } from "../Timelines";
const CustomProductCard = ({ customProduct, footer }) => {
  const { technologist } = customProduct;
  const [activeKey, setActiveKey] = useState("tab1");
  const tabList = [
    {
      key: "tab1",
      tab: "Podstawowe informacje",
    },
    {
      key: "tab2",
      tab: "Szczegóły realizacji",
    },
  ];
  const contentList = {
    tab1: (
      <div>
        {" "}
        <OrderDetails product={customProduct} />
        <CardDivider content="Status" />
        <span>{customProduct.status}</span>
        {footer ? footer : ""}
      </div>
    ),

    tab2: (
      <div>
        {customProduct.status === "Przygotowany" ? (
          <SolutionDetails product={customProduct} />
        ) : (
          <>
            <CardDivider content="Szczegóły rozwiązania" />
            <div>Brak rozwiązania</div>
          </>
        )}
        <CardDivider content="Technolog" />
        {technologist !== null ? (
          <div>
            {technologist.firstName} {technologist.lastName}
          </div>
        ) : (
          <div>Brak</div>
        )}
        <>
          <CardDivider content="Historia realizacji" />
          <CustomProductTimeline customProduct={customProduct} />
        </>
      </div>
    ),
  };
  return (
    <div
      style={{
        height: "700px",
        width: "450px",
      }}
    >
      <Card
        hoverable
        title={customProduct.name}
        style={{ width: "100%", height: "100%" }}
        tabList={tabList}
        activeTabKey={activeKey}
        onTabChange={(key) => {
          setActiveKey(key);
        }}
      >
        {contentList[activeKey]}
      </Card>
    </div>
  );
};

export default CustomProductCard;
