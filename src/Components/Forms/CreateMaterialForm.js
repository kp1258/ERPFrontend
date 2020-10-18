import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card, Form, Button, Input } from "antd";
import { layout } from "../../Utils/FormLayout";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa materiału jest wymagana"),
});
const CreateMaterialForm = () => {
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div class="d-flex justify-content-center">
      <Card title="Formularz dodawania materiałów">
        <Form onFinish={handleSubmit(onSubmit)} {...layout}>
          <Form.Item label="Nazwa">
            <Controller
              name="name"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj nazwę materiału"
            />
            <div className="errorMessage">{errors.name?.message}</div>
          </Form.Item>

          <Button variant="primary" type="submit">
            Dodaj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateMaterialForm;
