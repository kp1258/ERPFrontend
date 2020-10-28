import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Card, Button, Input } from "antd";
import { layout } from "../../Utils/FormLayout";
import { clients } from "../../Api/erpApi";

const schema = yup.object().shape({
  companyName: yup.string().required("Nazwa firmy jest wymagana"),
  firstName: yup.string().required("Imię jest wymagane"),
  lastName: yup.string().required("Nazwisko jest wymagane"),
  phoneNumber: yup.string().required("Numer telefonu jest wymagany"),
  email: yup
    .string()
    .email("Niepoprawny adres e-mail")
    .required("Adres email jest wymagany"),
  address: yup.object().shape({
    street: yup.string().required("Ulica jest wymagana"),
    postalCode: yup.string().required("Kod pocztowy jest wymagany"),
    city: yup.string().required("Miasto jest wymagane"),
  }),
});
const CreateClientForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitting(true);
    clients
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
      <Card title="Formularz tworzenia klienta">
        <Form {...layout} onFinish={handleSubmit(onSubmit)}>
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
            <div className="errorMessage">
              {errors.address?.street?.message}
            </div>
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
            <Controller control={control} name="salesmanId" defaultValue={2} />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Dodaj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateClientForm;
