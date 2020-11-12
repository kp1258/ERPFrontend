import React from "react";
import { List, Space } from "antd";
import { CustomOrderItemStatus } from "../Others";
import { listContainerStyle } from "../../Utils/sharedStyles";
const CustomOrderItemStatusList = (props) => {
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
          pagination={pagination}
          footer={footer}
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
    </div>
  );
};

export default CustomOrderItemStatusList;
