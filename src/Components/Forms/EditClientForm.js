import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { layout } from "../../Utils/FormLayout";
import { Form, Select, Button, Input } from "antd";
import { clients } from "../../Api/erpApi";
import { clientSchema } from "../../Utils/yupSchemas";

const EditClientForm = (props) => {
  const { client, toggleSubmitting } = props;
  const { control, errors, handleSubmit, setValue, reset } = useForm({
    resolver: yupResolver(clientSchema),
  });
  useEffect(() => {
    reset({
      companyName: client.companyName,
      firstName: client.firstName,
      lastName: client.lastName,
      phoneNumber: client.phoneNumber,
      email: client.email,
      address: {
        street: client.address.street,
        postalCode: client.address.postalCode,
        city: client.address.city,
      },
    });
  }, [client]);
  const onSubmit = (data) => {
    console.log(data);
    console.log("submitting");
    toggleSubmitting(true);
    clients
      .update(client.clientId, data)
      .then((res) => {
        console.log(res);
        props.hideModal();
        props.toggleUpdate();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => toggleSubmitting(false));
  };
  return (
    <>
      <Form form={props.form} {...layout} onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Nazwa firmy">
          <Controller
            name="companyName"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj nazwę firmy"
          />
          <div className="errorMessage">{errors.companyName?.message}</div>
        </Form.Item>
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
        <Form.Item label="Ulica i numer">
          <Controller
            name="address.street"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj ulicę i numer"
          />
          <div className="errorMessage">{errors.address?.street?.message}</div>
        </Form.Item>
        <Form.Item label="Kod pocztowy">
          <Controller
            name="address.postalCode"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj kod pocztowy"
          />
          <div className="errorMessage">
            {errors.address?.postalCode?.message}
          </div>
        </Form.Item>
        <Form.Item label="Miasto">
          <Controller
            name="address.city"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj miasto"
          />
          <div className="errorMessage">{errors.address?.city?.message}</div>
        </Form.Item>
        <Form.Item>
          <Controller
            as={<div />}
            control={control}
            name="salesmanId"
            defaultValue={2}
          />
        </Form.Item>
      </Form>
    </>
  );
};

export default EditClientForm;
