import React from "react";
import { List, Avatar, Space } from "antd";
import { StandardOrderItemStatus } from "../Others";
import { listContainerStyle } from "../../Utils/sharedStyles";
const defaultImageSrc = "/assets/productIcon.png";
const StandardOrderItemStatusList = (props) => {
  const { items } = props;
  const pagination = items.length > 3 ? { pageSize: 3 } : false;
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
          renderItem={(item) => {
            const imageSrc =
              item.standardProduct.imagePath !== null
                ? item.standardProduct.imagePath
                : defaultImageSrc;
            return (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={imageSrc} />}
                  title={item.standardProduct.name}
                  description={
                    item.standardProduct.standardProductCategory.name
                  }
                />
                <Space>
                  {`${item.quantity} sztuk`}
                  <StandardOrderItemStatus status={item.status} />
                </Space>
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
};

export default StandardOrderItemStatusList;
