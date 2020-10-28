import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { roles } from "../../Utils/UserRoles";
import { layout } from "../../Utils/FormLayout";
import { Form, Select, Button, Input } from "antd";
import { users } from "../../Api/erpApi";

const { Option } = Select;
const schema = yup.object().shape({
  firstName: yup.string().required("Imie jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  email: yup
    .string()
    .email("Niepoprawny adres E-Mail")
    .required("E-Mail jest wymagany"),
  login: yup.string().required("Login jest wymagany"),
  role: yup.string().required("Wybór stanowiska jest wymagany"),
});

const EditUserForm = (props) => {
  const { user } = props;
  const { control, errors, handleSubmit, reset, setValue } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...user,
    },
  });
  useEffect(() => {
    setValue("firstName", `${user.firstName}`);
    setValue("lastName", `${user.lastName}`);
    setValue("phoneNumber", `${user.phoneNumber}`);
    setValue("email", `${user.email}`);
    setValue("login", `${user.login}`);
  }, [props.user]);
  const onSubmit = (data) => {
    console.log(data);
    users
      .update(props.user.userId, data)
      .then((res) => {
        console.log(res);
        props.hideModal();
        props.toggleUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Form form={props.form} {...layout} onFinish={handleSubmit(onSubmit)}>
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
        <Form.Item>
          <Controller
            control={control}
            name="password"
            as={<div />}
            defaultValue={props.user.password}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default EditUserForm;
