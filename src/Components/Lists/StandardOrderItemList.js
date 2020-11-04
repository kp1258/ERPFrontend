import React from "react";
import { List, Avatar, Space } from "antd";
import { listContainerStyle } from "../../Utils/sharedStyles";

const defaultImageSrc = "/assets/productIcon.png";

const StadnardOrderItemList = (props) => {
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
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <List
          itemLayout="horizontal"
          pagination={pagination}
          footer={footer}
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
    </div>
  );
};

export default StadnardOrderItemList;
