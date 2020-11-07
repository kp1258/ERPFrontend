import React, { useState } from "react";
import { Form, Input, InputNumber, Space } from "antd";
import { FileItemButton } from "../Buttons";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { layout } from "../../Utils/layoutConstants";
import { customOrderItemSchema } from "../../Utils/yupSchemas";

const { TextArea } = Input;

const CreateCustomOrderItemForm = ({
  form,
  files,
  setFiles,
  hideModal,
  customOrderItems,
  setCustomOrderItems,
}) => {
  const generateRandomString = () => {
    return Math.random().toString(36);
  };
  const [inputKey, setInputKey] = useState(generateRandomString());
  const { control, errors, handleSubmit, reset } = useForm({
    resolver: yupResolver(customOrderItemSchema),
  });
  const onSubmit = (data) => {
    let customOrderItem = {
      id: Math.random().toString(36),
      quantity: data.quantity,
      customProduct: {
        name: data.name,
        orderDescription: data.orderDescription,
        fileList: [...files],
      },
    };
    console.log(customOrderItem);
    hideModal();
    setInputKey(generateRandomString());
    setFiles([]);
    reset({
      name: "",
      orderDescription: "",
      quantity: "",
    });
    setCustomOrderItems([...customOrderItems, customOrderItem]);
  };
  const removeFile = (filePath) => {
    let currentFiles = [...files];
    let filteredFiles = currentFiles.filter((file) => {
      return file.filePath !== filePath;
    });
    setFiles([...filteredFiles]);
  };
  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.files != null) {
      let file = e.target.files[0];
      let fileObject = {
        file: file,
        fileName: file.name,
        filePath: URL.createObjectURL(file),
      };
      var newFiles = [...files];
      newFiles.push(fileObject);
      setFiles(newFiles);
      setInputKey(generateRandomString());
      console.log(files);
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
            id="abc"
            type="file"
            name="files"
            onChange={onChange}
            key={inputKey || ""}
          />
          <label for="abc">Dodaj plik</label>
        </Form.Item>
      </Form>
      <Space direction="vertical">
        {files.length > 0
          ? [...files].map((file) => (
              <FileItemButton
                key={file.fileName}
                file={file}
                handleCancel={removeFile}
              />
            ))
          : ""}
      </Space>
    </div>
  );
};

export default CreateCustomOrderItemForm;
