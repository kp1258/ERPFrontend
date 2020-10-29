import { Modal, Form, Input } from "antd";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { warehouseSchema } from "../../Utils/yupSchemas";
import { layout } from "../../Utils/FormLayout";
import { materialWarehouse, productWarehouse } from "../../Api/erpApi";

const ChangeStockModal = (props) => {
  const {
    toggleUpdate,
    title,
    titleLabel,
    type,
    name,
    item,
    visible,
    hideModal,
    warehouseType,
  } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form] = Form.useForm();
  const { control, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(warehouseSchema),
  });

  const changeQuantity = (enteredQuantity) => {
    if (type === "entry") {
      return item.quantity + enteredQuantity;
    } else if (type === "withdrawal") {
      return item.quantity - enteredQuantity;
    }
  };
  const onSubmit = (data) => {
    setIsSubmitting(true);
    var quantity = changeQuantity(data.enteredQuantity);
    console.log(quantity);
    var patch = [{ op: "replace", path: "/quantity", value: quantity }];
    warehouseType === "material"
      ? materialWarehouse
          .changeStock(item.materialWarehouseItemId, patch)
          .then((res) => {
            console.log(res);
            toggleUpdate();
            hideModal();
            reset();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsSubmitting(false);
          })
      : productWarehouse
          .changeStock(item.productWarehouseItemId, patch)
          .then((res) => {
            console.log(res);
            toggleUpdate();
            hideModal();
            reset();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setIsSubmitting(false);
          });
  };
  const handleCancel = () => {
    hideModal();
  };
  return (
    <Modal
      title={`${title}: ${titleLabel}`}
      visible={visible}
      onOk={form.submit}
      onCancel={handleCancel}
      confirmLoading={isSubmitting}
    >
      <div>{name}</div>
      <div>Obecna ilosć: {item.quantity}</div>
      <Form form={form} {...layout} onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Ilość">
          <Controller
            name="enteredQuantity"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj ilość"
          />
          <div className="errorMessage">{errors.enteredQuantity?.message}</div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ChangeStockModal;
