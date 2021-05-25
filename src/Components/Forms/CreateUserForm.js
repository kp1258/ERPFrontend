import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Card, Button, Input, Select } from "antd";
import { roles } from "../../Utils/UserRoles";
import { layout } from "../../Utils/layoutConstants";
import "./index.css";
import { users } from "../../Api/erpApi";
import { userSchema } from "../../Utils/yupSchemas";
import { formCardStyle } from "../../Utils/sharedStyles";
import { handleResponse } from "../../Api/handleResponse";

const { Option } = Select;

const CreateUserForm = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(userSchema),
  });
  const onSubmit = (data) => {
    setIsSubmitting(true);
    users
      .create(data)
      .then((res) => {
        console.log(res);
        reset({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          login: "",
          password: "",
          role: "",
        });
        handleResponse(res, "Pomyślnie dodano pracownika");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div style={formCardStyle}>
      <Card title="Formularz dodawania pracownika" style={{}}>
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
          <Form.Item label="Adres e-mail">
            <Controller
              name="email"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj adres e-mail"
            />
            <div className="errorMessage">{errors.email?.message}</div>
          </Form.Item>
          <Form.Item label="Stanowisko">
            <Controller
              name="role"
              control={control}
              as={
                <Select placeholder="Wybierz stanowisko">
                  {roles.map((role) => (
                    <Option value={role.value}>{role.name}</Option>
                  ))}
                </Select>
              }
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
