import React, { useState } from "react";
import CustomOrderItem from "./CustomOrderItem";
import {
  CreateCustomOrderItemModal,
  EditCustomOrderItemModal,
} from "../Modals";
import { Button } from "antd";

const CustomOrderItemsCreator = ({ customOrderItems, setCustomOrderItems }) => {
  const [isCreateVisible, setIsCreateVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [item, setItem] = useState(0);

  const handleEdit = (id) => {
    console.log(item);
    let orderItems = [...customOrderItems];
    let chosenItem = orderItems.find((item) => {
      return item.id === id;
    });
    setItem(chosenItem);
    setIsEditVisible(true);
    console.log(chosenItem);
  };
  const handleCancel = (id) => {
    console.log(customOrderItems);
    let orderItems = [...customOrderItems];
    let filteredItems = orderItems.filter((item) => {
      return item.id !== id;
    });
    console.log(filteredItems);
    setCustomOrderItems([...filteredItems]);
  };
  return (
    <div>
      {customOrderItems.map((item) => (
        <CustomOrderItem
          key={item.name}
          item={item}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
        />
      ))}
      <CreateCustomOrderItemModal
        customOrderItems={customOrderItems}
        setCustomOrderItems={setCustomOrderItems}
        visible={isCreateVisible}
        hideModal={() => setIsCreateVisible(false)}
      />
      {item !== 0 ? (
        <EditCustomOrderItemModal
          item={item}
          visible={isEditVisible}
          hideModal={() => setIsEditVisible(false)}
          setCustomOrderItems={setCustomOrderItems}
          customOrderItems={customOrderItems}
        />
      ) : (
        ""
      )}
      <Button onClick={() => setIsCreateVisible(true)} type="primary">
        Dodaj pozycję
      </Button>
    </div>
  );
};

export default CustomOrderItemsCreator;
