import React from "react";
import { Button, Modal, Form } from "antd";
import { useState, useEffect } from "react";
import { EditUserForm } from "../Forms";

const EditUserModal = (props) => {
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
        isSubmitting={isSubmitting}
      >
        <EditUserForm
          key={props.user.userId}
          user={props.user}
          form={form}
          hideModal={props.hideModal}
          toggleUpdate={props.toggleUpdate}
        />
      </Modal>
    </>
  );
};

export default EditUserModal;
