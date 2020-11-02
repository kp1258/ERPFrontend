import React from "react";
import { List } from "antd";
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
            <div>Status</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CustomOrderItemStatusList;
