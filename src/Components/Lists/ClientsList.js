import React from "react";
import { List } from "antd";
import { inactiveCardColor } from "../../Utils/sharedStyles";

const ClientsList = (props) => {
  const { items } = props;
  return (
    <div style={{ height: "1000px" }}>
      <div
        style={{
          height: "100%",
          backgroundColor: "white",
          border: "1px solid gray",
        }}
      >
        <List
          itemLayout="vertical"
          header={<div style={{ fontSize: "large" }}>Klienci</div>}
          bordered
          dataSource={items}
          renderItem={(item) => {
            var color = item.status === "Nieaktywny" ? inactiveCardColor : "";
            return (
              <List.Item
                style={{ backgroundColor: color }}
                key={item.clientId}
                onClick={() => {
                  props.handleClick(item.clientId);
                }}
              >
                <List.Item.Meta
                  title={item.companyName}
                  description={`${item.firstName} ${item.lastName}`}
                />
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
};

export default ClientsList;
