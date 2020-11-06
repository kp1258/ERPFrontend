import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { layout } from "../../Utils/FormLayout";
import { Form, Select, Input } from "antd";
import { standardProductSchema } from "../../Utils/yupSchemas";
import useFetch from "../../Api/useFetch";
import { ComponentLoader } from "../Loaders";
import { standardProducts } from "../../Api/erpApi";
import { NetworkErrorAlert } from "../Alerts";

const { Option } = Select;
const EditStandardProductForm = (props) => {
  const { product, toggleSubmitting } = props;
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/standard-products/categories",
  });
  console.log(response);
  console.log(product);
  const { control, errors, handleSubmit, setValue } = useForm({
    resolver: yupResolver(standardProductSchema),
    defaultValues: {
      ...product,
    },
  });
  useEffect(() => {
    setValue("name", `${product.name}`);
    setValue("dimensions", `${product.dimensions}`);
    setValue(
      "standardProductCategoryId",
      `${product.standardProductCategory.standardProductCategoryId}`
    );
  }, [product]);
  const onSubmit = (data) => {
    console.log(data);
    toggleSubmitting(true);
    standardProducts
      .update(product.standardProductId, data)
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
      {isLoading === false ? (
        error === "" ? (
          <Form {...layout} form={props.form} onFinish={handleSubmit(onSubmit)}>
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
          </Form>
        ) : (
          <ComponentLoader />
        )
      ) : (
        <NetworkErrorAlert />
      )}
    </>
  );
};

export default EditStandardProductForm;
