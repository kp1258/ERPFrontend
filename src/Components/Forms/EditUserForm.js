import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { roles } from "../../Utils/UserRoles";
import { layout } from "../../Utils/FormLayout";
import { Form, Select, Button, Input } from "antd";

const { Option } = Select;
const schema = yup.object().shape({
  firstName: yup.string().required("Imie jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  eMail: yup
    .string()
    .email("Niepoprawny adres E-Mail")
    .required("E-Mail jest wymagany"),
  role: yup.string().required("Wybór stanowiska jest wymagany"),
});

const EditUserForm = (props) => {
  const { control, errors } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...props.user,
    },
  });
  return (
    <>
      <Form form={props.form} {...layout}>
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
            name="eMail"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj adres E-Mail"
          />
          <div className="errorMessage">{errors.eMail?.message}</div>
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
      </Form>
    </>
  );
};

export default EditUserForm;
