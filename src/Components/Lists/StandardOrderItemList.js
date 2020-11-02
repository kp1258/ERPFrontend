import React from "react";
import { List, Avatar, Space } from "antd";

const defaultImageSrc = "/assets/productIcon.png";
const StadnardOrderItemList = (props) => {
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
            <List.Item.Meta
              avatar={<Avatar src={defaultImageSrc} />}
              title={item.standardProduct.name}
              description={item.standardProduct.standardProductCategory.name}
            />
            <Space>{`${item.quantity} sztuk`}</Space>
          </List.Item>
        )}
      />
    </div>
  );
};

export default StadnardOrderItemList;
