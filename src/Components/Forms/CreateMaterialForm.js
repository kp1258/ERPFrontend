import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Form, Button, Input } from "antd";
import { layout } from "../../Utils/layoutConstants";
import { materialSchema } from "../../Utils/yupSchemas";
import { materials } from "../../Api/erpApi";
import { formCardStyle } from "../../Utils/sharedStyles";
import { handleResponse } from "../../Api/handleResponse";

const CreateMaterialForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(materialSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitting(false);
    materials
      .create(data)
      .then((res) => {
        console.log(res);
        reset({
          name: "",
        });
        handleResponse(res, "Pomyślnie dodano materiał");
      })
      .catch((err) => {
        handleResponse(err, "Coś poszło nie tak");
        console.log(err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div style={formCardStyle}>
      <Card title="Formularz dodawania materiałów">
        <Form onFinish={handleSubmit(onSubmit)} {...layout}>
          <Form.Item label="Nazwa materiału">
            <Controller
              name="name"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj nazwę materiału"
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

export default CreateMaterialForm;
