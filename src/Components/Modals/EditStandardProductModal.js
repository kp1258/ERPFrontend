import React, { useState } from "react";
import { Modal, Form } from "antd";
import { EditStandardProductForm } from "../../Components/Forms";

const EditStandardProductModal = (props) => {
  const { product, visible } = props;
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
        <EditStandardProductForm
          key={product.standardProductId}
          product={product}
          form={form}
          hideModal={props.hideModal}
          toggleUpdate={props.toggleUpdate}
          toggleSubmitting={setIsSubmitting}
        />
      </Modal>
    </>
  );
};

export default EditStandardProductModal;
