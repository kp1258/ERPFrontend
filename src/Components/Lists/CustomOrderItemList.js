import React from "react";
import { List } from "antd";
import { listContainerStyle } from "../../Utils/sharedStyles";
const CustomOrderItemList = (props) => {
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
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={items}
          pagination={pagination}
          footer={footer}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.customProduct.name} />
              {`${item.quantity} sztuk`}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default CustomOrderItemList;
