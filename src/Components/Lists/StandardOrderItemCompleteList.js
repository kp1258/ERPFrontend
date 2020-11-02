import React from "react";
import { List, Avatar, Checkbox, Space } from "antd";
import { StandardOrderItemStatus } from "../Others";
const defaultImageSrc = "/assets/productIcon.png";
const StandardOrderItemCompleteList = ({
  items,
  selectedCheckboxes,
  setSelectedCheckboxes,
}) => {
  const toggleCheckbox = (e, item) => {
    const checkedBoxes = [...selectedCheckboxes];
    if (e.target.checked) {
      checkedBoxes.push(item);
    } else {
      const index = checkedBoxes.findIndex(
        (ch) => ch.standardOrderItemId === item.standardOrderItemId
      );
      checkedBoxes.splice(index, 1);
    }
    setSelectedCheckboxes([...checkedBoxes]);
  };
  console.log(selectedCheckboxes);
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
        renderItem={(item) => {
          const status = item.status !== "dostępny" ? true : false;
          return (
            <List.Item
              actions={[
                <Checkbox
                  checked={selectedCheckboxes.find(
                    (ch) => ch.standardOrderItemId === item.standardOrderItemId
                  )}
                  disabled={status}
                  onChange={(e) => toggleCheckbox(e, item)}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={defaultImageSrc} />}
                title={item.standardProduct.name}
                description={item.standardProduct.standardProductCategory.name}
              />
              <Space size={40}>
                {`${item.quantity} sztuk`}
                <StandardOrderItemStatus status={item.status} />
              </Space>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default StandardOrderItemCompleteList;