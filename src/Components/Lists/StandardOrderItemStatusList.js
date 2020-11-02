import React from "react";
import { List, Avatar } from "antd";
import { StandardOrderItemStatus } from "../Others";
const defaultImageSrc = "/assets/productIcon.png";
const StandardOrderItemStatusList = (props) => {
  const { items } = props;
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={defaultImageSrc} />}
              title={item.standardProduct.name}
              description={`Ilość: ${item.quantity}`}
            />
            <StandardOrderItemStatus status={item.status} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default StandardOrderItemStatusList;
