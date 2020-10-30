import React from "react";
import { Modal, Form } from "antd";
import { useState, useEffect } from "react";
import { EditCategoryForm } from "../Forms";

const EditCategoryModal = (props) => {
  const { visible, category } = props;
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
        <EditCategoryForm
          key={category.standardProductCategoryId}
          category={category}
          form={form}
          hideModal={props.hideModal}
          toggleUpdate={props.toggleUpdate}
          toggleSubmitting={setIsSubmitting}
        />
      </Modal>
    </>
  );
};

export default EditCategoryModal;
