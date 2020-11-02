import React from "react";
import { List } from "antd";
const CustomOrderItemList = (props) => {
  const { items } = props;
  console.log(items);
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
          </List.Item>
        )}
      />
    </div>
  );
};

export default CustomOrderItemList;
