import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Card, Form, Button, Input, Select } from "antd";
import UploadButton from "../Buttons/UploadButton";

const { Option } = Select;
const categories = [
  {
    id: 1,
    name: "Nóż",
  },
  {
    id: 2,
    name: "Sito",
  },
];
const schema = yup.object().shape({
  name: yup.string().required("Nazwa jest wymagana"),
  dimensions: yup.string().required("Wymiary są wymagane"),
  category: yup
    .number()
    .positive("Wybór kategorii jest wymagany")
    .required("Wybór kategorii jest wymagany"),
});
const CreateStandardProductForm = () => {
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div class="d-flex justify-content-center">
      <Card title="Formularz tworzenia produktu standardowego">
        <Form onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Nazwa">
            <Controller
              name="name"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj nazwę"
            />
            <div className="errorMessage">{errors.name?.message}</div>
          </Form.Item>

          <Form.Item label="Wymiary">
            <Controller
              name="dimensions"
              control={control}
              as={<Input />}
              defaultValue=""
              placeHolder="Podaj wymiary produktu"
            />
            <div className="errorMessage">{errors.dimensions?.message}</div>
          </Form.Item>
          <Form.Item label="Kategoria">
            <Controller
              name="category"
              control={control}
              as={
                <Select>
                  {categories.map((role) => (
                    <Option value={role.value}>{role.name}</Option>
                  ))}
                </Select>
              }
              placeholder="Wybierz kategorię"
              defaultValue=""
            />
          </Form.Item>
          <div className="errorMessage">{errors.category?.message}</div>
          <div className="mb-3">
            <UploadButton limit={2} />
          </div>
          <Button type="primary" htmlType="submit">
            Dodaj
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateStandardProductForm;
