import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Form, Button, Input, Select } from "antd";
import { standardProductSchema } from "../../Utils/yupSchemas";
import UploadButton from "../Buttons/UploadButton";
import useFetch from "../../Api/useFetch";
import { ComponentLoader } from "../../Components/Others";

const { Option } = Select;

const CreateStandardProductForm = () => {
  const { response, isLoading, refetch } = useFetch({
    method: "get",
    url: "/standard-products/categories",
  });
  console.log(response);
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(standardProductSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    reset({});
  };
  return (
    <div>
      {isLoading === false ? (
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
                name="standardProductCategoryId"
                control={control}
                as={
                  <Select>
                    {[...response].map((category) => (
                      <Option value={category.standardProductCategoryId}>
                        {category.name}
                      </Option>
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
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
};

export default CreateStandardProductForm;
