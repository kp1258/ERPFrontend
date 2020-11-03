import React, { useState } from "react";
import { Modal, Form } from "antd";
import { CreateCustomOrderItemForm } from "../Forms";
const CreateCustomOrderItemModal = ({
  visible,
  hideModal,
  setCustomOrderItems,
  customOrderItems,
}) => {
  const [form] = Form.useForm();
  const [files, setFiles] = useState([]);
  return (
    <div>
      <Modal
        title="Dodaj pozycję"
        visible={visible}
        onOk={form.submit}
        onCancel={() => {
          hideModal();
          setFiles([]);
        }}
      >
        <CreateCustomOrderItemForm
          form={form}
          files={files}
          setFiles={setFiles}
          hideModal={hideModal}
          customOrderItems={customOrderItems}
          setCustomOrderItems={setCustomOrderItems}
        />
      </Modal>
    </div>
  );
};

export default CreateCustomOrderItemModal;
