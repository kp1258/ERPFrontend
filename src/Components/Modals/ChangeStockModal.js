import { Modal, Form, Input } from "antd";
import React from "react";
const ChangeStockModal = (props) => {
  const { title, type, name, item, visible, hideModal } = props;

  const changeQuantity = (quantity) => {
    if (type === "entry") {
      return quantity;
    } else if (type === "withdrawal") {
      return quantity;
    }
  };
  const handleCancel = () => {
    hideModal();
  };
  return (
    <Modal title={title} visible={visible} onCancel={handleCancel}>
      <div>{name}</div>
      <div>Obecna ilosć: {item.quantity}</div>
      <Form>
        <Input name="quantity" />
      </Form>
    </Modal>
  );
};

export default ChangeStockModal;
