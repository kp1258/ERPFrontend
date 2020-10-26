import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card, Form, Button, Input } from "antd";
import { layout } from "../../Utils/FormLayout";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa kategorii jest wymagana"),
});
const CreateCategoryForm = () => {
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <Card title="Formularz dodawania kategorii produktów">
        <Form onFinish={handleSubmit(onSubmit)} {...layout}>
          <Form.Item label="Nazwa kategorii">
            <Controller
              name="name"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj nazwę kategorii"
            />
            <div className="errorMessage">{errors.name?.message}</div>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Dodaj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateCategoryForm;
