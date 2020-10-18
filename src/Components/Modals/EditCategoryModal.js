import React from "react";
import { Modal, Form } from "antd";
import { useState, useEffect } from "react";
import { EditCategoryForm } from "../Forms";

const EditCategoryModal = (props) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);
  const handleSend = () => {
    setLoading(true);
    setTimeout(() => {
      form
        .validateFields()
        .then((values) => {
          form.resetFields();
          console.log(values);
        })
        .catch((info) => {
          console.log("Validate Failed:", info);
        });
    }, 2000);
  };
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
    props.hideModal();
  };
  return (
    <>
      <Modal
        title="Edytuj dane"
        visible={visible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log(values);
              setVisible(false);
              props.hideModal();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
      >
        <EditCategoryForm category={props.category} form={form} />
      </Modal>
    </>
  );
};

export default EditCategoryModal;
