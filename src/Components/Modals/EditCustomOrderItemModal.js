import React, { useEffect, useState } from "react";
import { Modal, Form } from "antd";
import { EditCustomOrderItemForm } from "../Forms";

const EditCustomOrderItemModal = ({
  item,
  visible,
  hideModal,
  setCustomOrderItems,
  customOrderItems,
}) => {
  const [form] = Form.useForm();
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  useEffect(() => {
    console.log("use Effect triggered");
  }, [triggerUpdate]);
  return (
    <div>
      <Modal
        title="Edytuj pozycję"
        visible={visible}
        onOk={form.submit}
        onCancel={() => {
          hideModal();
          setTriggerUpdate(!triggerUpdate);
        }}
      >
        <EditCustomOrderItemForm
          triggerUpdate={triggerUpdate}
          form={form}
          hideModal={hideModal}
          item={item}
          customOrderItems={customOrderItems}
          setCustomOrderItems={setCustomOrderItems}
        />
      </Modal>
    </div>
  );
};

export default EditCustomOrderItemModal;
