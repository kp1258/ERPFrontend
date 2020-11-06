import React from "react";
import { List, Checkbox, Space } from "antd";
import { CustomOrderItemStatus } from "../Others";
const CustomOrderItemCompleteList = ({
  items,
  selectedCheckboxes,
  setSelectedCheckboxes,
}) => {
  const pagination = items.length > 5 ? { pagesize: 5 } : false;

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
        pagination={pagination}
        footer={<div>Liczba pozycji: {items.length}</div>}
        dataSource={items}
        renderItem={(item) => {
          const status = item.status !== "Wyprodukowany" ? true : false;
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
              <List.Item.Meta title={item.customProduct.name} />
              <Space size={40}>
                {`${item.quantity} sztuk`}
                <CustomOrderItemStatus status={item.status} />
              </Space>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default CustomOrderItemCompleteList;
