import React from "react";
import { List } from "antd";

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
          renderItem={(item) => (
            <List.Item
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
          )}
        />
      </div>
    </div>
  );
};

export default ClientsList;
