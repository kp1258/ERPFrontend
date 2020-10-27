import React from "react";
import { List, Avatar } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
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
              avatar={<Avatar src={QuestionCircleOutlined} />}
              title={item.name}
              description={`Ilość: ${item.quantity}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default StadnardOrderItemList;
