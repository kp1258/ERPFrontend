import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Card, Button, Input } from "antd";
import { layout } from "../../Utils/FormLayout";
import { clients } from "../../Api/erpApi";
import { clientSchema } from "../../Utils/yupSchemas";
import { formCardStyle } from "../../Utils/sharedStyles";
import { UserContext } from "../../Contexts/UserContext";
import { handleResponse } from "../../Api/handleResponse";

const CreateClientForm = () => {
  const user = useContext(UserContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(clientSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    var params = { ...data, salesmanId: user.userId };
    setIsSubmitting(true);
    clients
      .create(params)
      .then((res) => {
        console.log(res);
        handleResponse(res, "Pomyślnie dodano klienta");
        reset({
          companyName: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          address: {
            street: "",
            postalCode: "",
            city: "",
          },
        });
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Nastąpił błąd przy dodawaniu klienta");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div style={formCardStyle}>
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
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Dodaj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateClientForm;
