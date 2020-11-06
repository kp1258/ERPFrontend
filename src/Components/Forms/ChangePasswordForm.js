import React, { useState } from "react";
import { changePasswordSchema } from "../../Utils/yupSchemas";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Card, Input, Button } from "antd";
import { formCardStyle } from "../../Utils/sharedStyles";
import { layout } from "../../Utils/FormLayout";
import { users } from "../../Api/erpApi";

const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div style={formCardStyle}>
      <Card
        hoverable
        style={{ width: "400px", margin: "auto" }}
        title="Formularz zmiany hasła"
      >
        <Form onFinish={handleSubmit(onSubmit)} {...layout}>
          <Form.Item label="Obecne hasło">
            <Controller
              name="oldPassword"
              control={control}
              as={<Input.Password />}
              defaultValue=""
              placeHolder="Podaj obecne hasło"
            />
            <div className="errorMessage">{errors.oldPassword?.message}</div>
          </Form.Item>
          <Form.Item label="Nowe hasło">
            <Controller
              name="newPassword"
              control={control}
              as={<Input.Password />}
              defaultValue=""
              placeHolder="Podaj nowe hasło"
            />
            <div className="errorMessage">{errors.newPassword?.message}</div>
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Zmień
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ChangePasswordForm;
