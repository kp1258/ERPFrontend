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
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        footer={<div>Suma pozycji: {items.length}</div>}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.customProduct.name} />
            {`${item.quantity} sztuk`}
          </List.Item>
        )}
      />
    </div>
  );
};

export default CustomOrderItemList;
