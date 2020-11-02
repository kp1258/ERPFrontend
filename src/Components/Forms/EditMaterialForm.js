import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input } from "antd";
import { layout } from "../../Utils/FormLayout";
import { materialSchema } from "../../Utils/yupSchemas";
import { materials } from "../../Api/erpApi";

const EditMaterialForm = (props) => {
  const { material } = props;
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(materialSchema),
    defaultValues: {
      name: props.material.name,
    },
  });
  useEffect(() => {
    reset({
      name: material.name,
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
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => props.toggleSubmitting(false));
  };
  return (
    <Form form={props.form} onFinish={handleSubmit(onSubmit)} {...layout}>
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
    </Form>
  );
};

export default EditMaterialForm;
