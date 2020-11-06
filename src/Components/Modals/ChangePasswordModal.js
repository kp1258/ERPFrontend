import React, { useState } from "react";
import { changePasswordAdminSchema } from "../../Utils/yupSchemas";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { layout } from "../../Utils/FormLayout";
import { Modal, Form, Input } from "antd";
import { users } from "../../Api/erpApi";

const ChangePasswordModal = ({ visible, userId, hideModal }) => {
  const [isSubmitting, setIsSumitting] = useState(false);
  const [form] = Form.useForm();
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(changePasswordAdminSchema),
  });
  const onSubmit = (data) => {
    setIsSumitting(true);
    users
      .changePasswordAdmin(userId, data)
      .then((res) => {
        console.log(res);
        reset({
          newPasssword: "",
        });
        hideModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSumitting(false);
      });
  };
  return (
    <div>
      <Modal
        title="Zmień hasło"
        visible={visible}
        onOk={form.submit}
        onCancel={() => hideModal()}
        confirmLoading={isSubmitting}
      >
        <Form form={form} {...layout} onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Nowe hasło">
            <Controller
              name="newPassword"
              control={control}
              as={<Input.Password />}
              defaultValue=""
              placeHolder="Podaj nowe hasło"
            />
            <div className="errorMessage">{errors.newPasssword?.message}</div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ChangePasswordModal;
