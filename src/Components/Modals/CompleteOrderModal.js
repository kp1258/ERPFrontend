import React, { useState, useContext } from "react";
import { Modal, message } from "antd";
import { orders } from "../../Api/erpApi";
import { UserContext } from "../../Contexts/UserContext";
import {
  CustomOrderItemCompleteList,
  StandardOrderItemCompleteList,
} from "../Lists";
import { handleResponse } from "../../Api/handleResponse";
const CompleteOrderModal = ({ visible, hideModal, order, toggleUpdate }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const user = useContext(UserContext);
  const handleClick = () => {
    var length =
      order.type === "Standardowy"
        ? order.standardOrderItemDetails.length
        : order.customOrderItems.length;
    if (selectedCheckboxes.length === length) {
      setIsSubmitting(true);
      var patch = [{ op: "replace", path: "/status", value: "Zrealizowane" }];
      orders
        .complete(user.userId, order.orderId, patch)
        .then((res) => {
          hideModal();
          toggleUpdate();
          handleResponse(res, "Pomyślnie zrealizowano zamówienie");
        })
        .catch((err) => {
          console.log(err);
          handleResponse(err, "Coś poszło nie tak");
        })
        .finally(() => setIsSubmitting(false));
    } else {
      message.warning(
        "Nie wszystkie pozycje zamówienia zostały skompletowane",
        3
      );
    }
  };
  return (
    <div>
      <Modal
        title="Zrealizuj zamówienie"
        visible={visible}
        onOk={() => {
          handleClick();
        }}
        onCancel={() => {
          hideModal();
          setSelectedCheckboxes([]);
        }}
        confirmLoading={isSubmitting}
      >
        <>
          {order.type !== "Standardowy" ? (
            <CustomOrderItemCompleteList
              items={order.customOrderItems}
              selectedCheckboxes={selectedCheckboxes}
              setSelectedCheckboxes={setSelectedCheckboxes}
            />
          ) : (
            <StandardOrderItemCompleteList
              items={order.standardOrderItemDetails}
              selectedCheckboxes={selectedCheckboxes}
              setSelectedCheckboxes={setSelectedCheckboxes}
            />
          )}
        </>
      </Modal>
    </div>
  );
};

export default CompleteOrderModal;
