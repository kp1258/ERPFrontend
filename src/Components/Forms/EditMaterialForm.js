import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card, Form, Button, Input } from "antd";
import { layout } from "../../Utils/FormLayout";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa materiału jest wymagana"),
});

const EditMaterialForm = (props) => {
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id: props.material.id,
      name: props.material.name,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
    props.changeVisibility();
  };
  return (
    <div class="d-flex justify-content-center">
      <Card title="Formularz edycji materiału">
        <Form onSubmit={handleSubmit(onSubmit)} {...layout}>
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
          <Button type="primary" htmlType="submit">
            Edytuj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default EditMaterialForm;
