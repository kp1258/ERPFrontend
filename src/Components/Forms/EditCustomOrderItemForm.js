import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Space } from "antd";
import { FileItemButton } from "../Buttons";
import { useForm, Controller } from "react-hook-form";
import { layout } from "../../Utils/layoutConstants";
import { yupResolver } from "@hookform/resolvers/yup";
import { customOrderItemSchema } from "../../Utils/yupSchemas";
import CustomOrderItem from "../OrderSteps/CustomOrderItem";

const { TextArea } = Input;

const EditCustomOrderItemForm = ({
  form,
  hideModal,
  item,
  customOrderItems,
  setCustomOrderItems,
  triggerUpdate,
}) => {
  const [orderFiles, setOrderFiles] = useState([
    ...item.customProduct.fileList,
  ]);
  console.log(`orderFiles: ${orderFiles}`);
  console.log(orderFiles);
  const generateRandomString = () => {
    return Math.random().toString(36);
  };
  const [inputKey, setInputKey] = useState(generateRandomString());
  const { control, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(customOrderItemSchema),
  });
  useEffect(() => {
    setOrderFiles([...item.customProduct.fileList]);
    reset({
      name: item.customProduct.name,
      orderDescription: item.customProduct.orderDescription,
      quantity: item.quantity,
    });
  }, [item, triggerUpdate]);
  const onSubmit = (data) => {
    console.log(`onSubmit orderFiles: ${orderFiles}`);
    let customOrderItem = {
      id: item.id,
      quantity: data.quantity,
      customProduct: {
        name: data.name,
        orderDescription: data.orderDescription,
        fileList: [...orderFiles],
      },
    };
    var index = customOrderItems.findIndex((x) => x.id === item.id);
    var orderItems = [...customOrderItems];
    orderItems.splice(index, 1, customOrderItem);
    setCustomOrderItems([...orderItems]);
    hideModal();
    console.log(customOrderItem);
  };
  const removeFile = (filePath) => {
    let currentFiles = [...orderFiles];
    let filteredFiles = currentFiles.filter((file) => {
      return file.filePath !== filePath;
    });
    setOrderFiles([...filteredFiles]);
  };
  const onChange = (e) => {
    if (e.target.files != null) {
      let file = e.target.files[0];
      let fileObject = {
        file: file,
        fileName: file.name,
        filePath: URL.createObjectURL(file),
      };
      var newFiles = [...orderFiles];
      newFiles.push(fileObject);
      setOrderFiles([...newFiles]);
      setInputKey(generateRandomString());
    }
  };
  return (
    <div>
      <Form form={form} {...layout} onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Nazwa">
          <Controller
            name="name"
            control={control}
            as={<Input />}
            defaultValue=""
            placeHolder="Podaj nazwę produktu"
          />
          <div className="errorMessage">{errors.name?.message}</div>
        </Form.Item>
        <Form.Item label="Opis zamówienia">
          <Controller
            name="orderDescription"
            control={control}
            as={<TextArea rows={5} />}
            defaultValue=""
            placeHolder="Podaj opis zamówienia"
          />
          <div className="errorMessage">{errors.orderDescription?.message}</div>
        </Form.Item>
        <Form.Item label="Ilość">
          <Controller
            name="quantity"
            control={control}
            as={<InputNumber min={1} />}
            defaultValue=""
            placeHolder="Podaj ilość"
          />
          <div className="errorMessage">{errors.quantity?.message}</div>
        </Form.Item>
        <Form.Item>
          <input
            id="xxx"
            type="file"
            name="orderFiles"
            onChange={(e) => onChange(e)}
            key={inputKey || ""}
          />
          <label for="xxx">Dodaj plik</label>
        </Form.Item>
      </Form>
      <Space direction="vertical">
        {orderFiles.length > 0
          ? [...orderFiles].map((file) => (
              <FileItemButton
                key={file.filePath}
                file={file}
                handleCancel={removeFile}
              />
            ))
          : ""}
      </Space>
    </div>
  );
};

export default EditCustomOrderItemForm;
