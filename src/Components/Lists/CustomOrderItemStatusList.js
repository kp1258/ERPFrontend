import React from "react";
import { List, Space } from "antd";
import { CustomOrderItemStatus } from "../Others";
const CustomOrderItemStatusList = (props) => {
  const { items } = props;
  return (
    <div>
      <List
        itemLayout="horizontal"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        footer={<div>Liczba pozycji: {items.length}</div>}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item.customProduct.name} />
            <Space>
              {`${item.quantity} sztuk`}
              <CustomOrderItemStatus status={item.status} />
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CustomOrderItemStatusList;
