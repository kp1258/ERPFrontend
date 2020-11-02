import React, { useState } from "react";
import { Modal, Form } from "antd";
import { EditMaterialForm } from "../Forms";

const EditMaterialModal = (props) => {
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
        <EditMaterialForm
          key={props.material.materialId}
          material={props.material}
          form={form}
          hideModal={props.hideModal}
          toggleUpdate={props.toggleUpdate}
          toggleSubmitting={setIsSubmitting}
        />
      </Modal>
    </>
  );
};

export default EditMaterialModal;
