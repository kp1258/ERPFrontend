import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input } from "antd";
import { layout } from "../../Utils/layoutConstants";
import { materialSchema } from "../../Utils/yupSchemas";
import { materials } from "../../Api/erpApi";
import { handleResponse } from "../../Api/handleResponse";

const EditMaterialForm = (props) => {
  const { material } = props;
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(materialSchema),
    defaultValues: {
      name: props.material.name,
      unit: props.material.unit,
    },
  });
  useEffect(() => {
    reset({
      name: material.name,
      unit: material.unit,
    });
  }, [props.material]);

  const onSubmit = (data) => {
    props.toggleSubmitting(true);
    console.log(data);
    materials
      .update(material.materialId, data)
      .then((res) => {
        console.log(res);
        props.hideModal();
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie edytowano dane materiału");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak");
      })
      .finally(() => props.toggleSubmitting(false));
  };
  return (
    <Form form={props.form} onFinish={handleSubmit(onSubmit)} {...layout}>
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
      <Form.Item label="Jednostka">
        <Controller
          name="unit"
          control={control}
          as={<Input />}
          defaultValue=""
          placeHolder="Podaj jednostkę"
        />
        <div className="errorMessage">{errors.unit?.message}</div>
      </Form.Item>
    </Form>
  );
};

export default EditMaterialForm;
