import React from "react";
import { List, Avatar } from "antd";

const defaultImageSrc = "/assets/productIcon.png";
const StadnardOrderItemList = (props) => {
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
          </List.Item>
        )}
      />
    </div>
  );
};

export default StadnardOrderItemList;
