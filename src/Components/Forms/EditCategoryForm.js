import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Input } from "antd";
import { layout } from "../../Utils/FormLayout";
import { useEffect } from "react";
import { categories } from "../../Api/erpApi";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa kategorii jest wymagana"),
});

const EditCategoryForm = (props) => {
  const { category } = props;
  useEffect(() => {
    reset({ id: category.standardProductCategoryId, name: category.name });
  }, [category]);

  const { control, errors, reset, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    props.toggleSubmitting(true);
    console.log(data);
    categories
      .update(category.standardProductCategoryId, data)
      .then((res) => {
        console.log(res);
        props.hideModal();
        props.toggleUpdate();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => props.toggleSubmitting(false));
  };
  return (
    <>
      <Form form={props.form} {...layout} onFinish={handleSubmit(onSubmit)}>
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
      </Form>
    </>
  );
};

export default EditCategoryForm;
