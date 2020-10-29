import React, { useState } from "react";
import { Modal, Form } from "antd";
import { EditClientForm } from "../../Components/Forms";

const EditClientModal = (props) => {
  const { visible } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();

  const handleCancel = () => {
    props.hideModal();
  };
  return (
    <>
      <Modal
        title="Edytuj dane"
        visible={visible}
        onOk={form.submit}
        onCancel={handleCancel}
        confirmLoading={isSubmitting}
      >
        <EditClientForm
          key={props.client.clientId}
          client={props.client}
          form={form}
          hideModal={props.hideModal}
          toggleUpdate={props.toggleUpdate}
          toggleSubmitting={setIsSubmitting}
        />
      </Modal>
    </>
  );
};

export default EditClientModal;
