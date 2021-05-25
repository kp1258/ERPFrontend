import { Modal, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { warehouseSchema } from "../../Utils/yupSchemas";
import { layout } from "../../Utils/layoutConstants";
import { materialWarehouse, productWarehouse } from "../../Api/erpApi";
import { handleResponse } from "../../Api/handleResponse";

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
      if (item.quantity < enteredQuantity) {
        message.error("Wydawana ilość nie może przekraczać stanu magazynu");
        return -1;
      } else {
        return item.quantity - enteredQuantity;
      }
    }
  };
  const onSubmit = (data) => {
    var quantity = changeQuantity(data.enteredQuantity);
    if (quantity !== -1) {
      console.log(quantity);
      setIsSubmitting(true);
      var patch = [{ op: "replace", path: "/quantity", value: quantity }];
      warehouseType === "material"
        ? materialWarehouse
            .changeStock(item.materialWarehouseItemId, patch)
            .then((res) => {
              console.log(res);
              toggleUpdate();
              hideModal();
              reset();
              handleResponse(res, "Pomyślnie zmieniono stan materiału");
            })
            .catch((err) => {
              console.log(err);
              handleResponse(err, "Coś poszło nie tak");
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
              handleResponse(res, "Pomyślnie zmieniono stan produktu");
            })
            .catch((err) => {
              console.log(err);
              handleResponse(err, "Coś poszło nie tak");
            })
            .finally(() => {
              setIsSubmitting(false);
            });
    }
  };
  const handleCancel = () => {
    hideModal();
  };
  return (
    <Modal
      title={`${title}: ${titleLabel}`}
      visible={visible}
      style={{ borderStyle: "solid", borderWidth: "4px", borderColor: "gray" }}
      onOk={form.submit}
      onCancel={handleCancel}
      confirmLoading={isSubmitting}
    >
      <div style={{ fontSize: "125%", margin: "auto" }}>{name}</div>
      <div style={{ fontSize: "110%", margin: "auto" }}>
        Obecna liczba: {item.quantity}
      </div>
      <br />
      <Form form={form} {...layout} onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Liczba">
          <Controller
            name="enteredQuantity"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj liczbę"
          />
          <div className="errorMessage">{errors.enteredQuantity?.message}</div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ChangeStockModal;
