import React from "react";
import { List, Avatar, Space } from "antd";
import { StandardOrderItemStatus } from "../Others";
import { listContainerStyle } from "../../Utils/sharedStyles";
const defaultImageSrc = "/assets/productIcon.png";
const StandardOrderItemStatusList = (props) => {
  const { items } = props;
  const pagination = items.length > 3 ? { pagesize: 3 } : false;
  const footer =
    items.length > 3 ? <div>Liczba pozycji: {items.length}</div> : false;
  return (
    <div style={listContainerStyle}>
      <div
        style={{
          minWidth: "300px",
          margin: "auto",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={items}
          pagination={pagination}
          footer={footer}
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
    </div>
  );
};

export default StandardOrderItemStatusList;
