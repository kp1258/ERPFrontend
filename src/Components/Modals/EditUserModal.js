import React from "react";
import { Button, Modal, Form } from "antd";
import { useState, useEffect } from "react";
import { EditUserForm } from "../Forms";

const EditUserModal = (props) => {
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
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
        // footer={[
        //   <Button onClick={handleSend} loading={loading}>
        //     Wyślij
        //   </Button>,
        // ]}
      >
        <EditUserForm user={props.user} form={form} />
      </Modal>
    </>
  );
};

export default EditUserModal;
