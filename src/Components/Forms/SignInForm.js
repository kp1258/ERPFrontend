import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Form, Button, Input } from "antd";
import { layout } from "../../Utils/FormLayout";
import { formCardStyle } from "../../Utils/sharedStyles";
import { signInSchema } from "../../Utils/yupSchemas";

const SignInForm = ({ handleLogin, loading }) => {
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const onSubmit = (data) => {
    handleLogin(data);
    // reset({
    //   login: "",
    //   password: "",
    // });
  };
  return (
    <div style={formCardStyle}>
      <Card
        hoverable
        style={{ width: "400px", margin: "auto" }}
        title="Formularz logowania"
      >
        <Form onFinish={handleSubmit(onSubmit)} {...layout}>
          <Form.Item label="Login">
            <Controller
              name="login"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj login"
            />
            <div className="errorMessage">{errors.login?.message}</div>
          </Form.Item>
          <Form.Item label="Hasło">
            <Controller
              name="password"
              control={control}
              as={<Input.Password />}
              defaultValue=""
              placeHolder="Podaj hasło"
            />
            <div className="errorMessage">{errors.password?.message}</div>
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Zaloguj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default SignInForm;
