import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Form, Button, Input } from "antd";
import { layout } from "../../Utils/FormLayout";
import { categorySchema } from "../../Utils/yupSchemas";
import { categories } from "../../Api/erpApi";

const CreateCategoryForm = (props) => {
  const { toggleUpdate } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(categorySchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitting(true);
    categories
      .create(data)
      .then((res) => {
        console.log(res);
        toggleUpdate();
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
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Dodaj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateCategoryForm;
