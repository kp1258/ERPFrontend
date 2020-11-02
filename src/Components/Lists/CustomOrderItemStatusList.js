import React from "react";
import { List } from "antd";
import { CustomOrderItemStatus } from "../Others";
const CustomOrderItemStatusList = (props) => {
  const { items } = props;
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.customProduct.name}
              description={`Ilość: ${item.quantity}`}
            />
            <CustomOrderItemStatus status={item.status} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CustomOrderItemStatusList;
