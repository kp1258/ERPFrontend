import React from "react";
import { Modal, Form } from "antd";
import { useState } from "react";
import { EditUserForm } from "../Forms";

const EditUserModal = (props) => {
  const { visible } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();

  return (
    <>
      <Modal
        title="Edytuj dane"
        visible={visible}
        onOk={form.submit}
        onCancel={() => props.hideModal()}
        confirmLoading={isSubmitting}
      >
        <EditUserForm
          key={props.user.userId}
          user={props.user}
          form={form}
          hideModal={props.hideModal}
          toggleUpdate={props.toggleUpdate}
          toggleSubmitting={setIsSubmitting}
        />
      </Modal>
    </>
  );
};

export default EditUserModal;
