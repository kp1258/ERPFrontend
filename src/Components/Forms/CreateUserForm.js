import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Card, Button, Input, Select } from "antd";
import { roles } from "../../Utils/UserRoles";
import { layout } from "../../Utils/FormLayout";
import "./index.css";
import { users } from "../../Api/erpApi";

const { Option } = Select;
const schema = yup.object().shape({
  firstName: yup.string().required("Imie jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  login: yup.string().required("Login jest wymagany"),
  password: yup.string().required("Hasło jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  email: yup
    .string()
    .email("Niepoprawny adres E-Mail")
    .required("E-Mail jest wymagany"),
  role: yup.string().required("Wybór stanowiska jest wymagany"),
});

const CreateUserForm = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setIsSubmitting(true);
    users
      .create(data)
      .then((res) => {
        console.log(res);
        reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div>
      <Card title="Formularz tworzenia pracownika">
        <Form {...layout} onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Imię">
            <Controller
              name="firstName"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj imię"
            />
            <div className="errorMessage">{errors.firstName?.message}</div>
          </Form.Item>
          <Form.Item label="Nazwisko">
            <Controller
              name="lastName"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj nazwisko"
            />
            <div className="errorMessage">{errors.lastName?.message}</div>
          </Form.Item>
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

          <Form.Item label="Numer telefonu">
            <Controller
              name="phoneNumber"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj numer telefonu"
            />
            <div className="errorMessage">{errors.phoneNumber?.message}</div>
          </Form.Item>
          <Form.Item label="Adres E-Mail">
            <Controller
              name="email"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj adres E-Mail"
            />
            <div className="errorMessage">{errors.email?.message}</div>
          </Form.Item>
          <Form.Item label="Stanowisko">
            <Controller
              name="role"
              control={control}
              as={
                <Select>
                  {roles.map((role) => (
                    <Option value={role.value}>{role.name}</Option>
                  ))}
                </Select>
              }
              placeholder="Wybierz stanowisko"
              defaultValue=""
            />
            <div className="errorMessage">{errors.role?.message}</div>
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Dodaj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateUserForm;
