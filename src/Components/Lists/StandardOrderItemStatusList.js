import React from "react";
import { List, Avatar, Space } from "antd";
import { StandardOrderItemStatus } from "../Others";
const defaultImageSrc = "/assets/productIcon.png";
const StandardOrderItemStatusList = (props) => {
  const { items } = props;
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
        footer={<div>Liczba pozycji: {items.length}</div>}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={defaultImageSrc} />}
              title={item.standardProduct.name}
              description={item.standardProduct.standardProductCategory.name}
            />
            <Space>
              {`${item.quantity} sztuk`}
              <StandardOrderItemStatus status={item.status} />
            </Space>
          </List.Item>
        )}
      />
    </div>
  );
};

export default StandardOrderItemStatusList;