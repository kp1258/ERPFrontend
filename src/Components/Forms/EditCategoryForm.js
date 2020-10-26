import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Input } from "antd";
import { layout } from "../../Utils/FormLayout";
import { useEffect } from "react";

const schema = yup.object().shape({
  name: yup.string().required("Nazwa kategorii jest wymagana"),
});

const EditCategoryForm = (props) => {
  const { category } = props;
  useEffect(() => {
    reset({ id: category.standardProductCategoryId, name: category.name });
  }, [category]);

  const { control, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    props.changeVisibility();
  };
  return (
    <>
      <Form form={props.form} {...layout}>
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
