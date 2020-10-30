import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { roles } from "../../Utils/UserRoles";
import { layout } from "../../Utils/FormLayout";
import { Form, Select, Input } from "antd";
import { users } from "../../Api/erpApi";
import { editUserSchema } from "../../Utils/yupSchemas";

const { Option } = Select;

const EditUserForm = (props) => {
  const { user } = props;
  const { control, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(editUserSchema),
    defaultValue: { ...user },
  });
  useEffect(() => {
    reset({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      login: user.login,
      password: user.password,
      role: user.role,
    });
  }, [props.user]);
  const onSubmit = (data) => {
    props.toggleSubmitting(true);
    console.log(data);
    users
      .update(user.userId, data)
      .then((res) => {
        console.log(res);
        props.hideModal();
        props.toggleUpdate();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => props.toggleSubmitting(false));
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
