import React, { useState, useContext } from "react";
import { Modal, Form, Input, Space } from "antd";
import { useForm, Controller } from "react-hook-form";
import { layout } from "../../Utils/layoutConstants";
import { customProducts } from "../../Api/erpApi";
import { FileItemButton } from "../Buttons";
import { UserContext } from "../../Contexts/UserContext";
import { handleResponse } from "../../Api/handleResponse";
import "./index.css";

const { TextArea } = Input;

const AddSolutionModal = (props) => {
  const user = useContext(UserContext);
  const { product, visible } = props;
  const generateRandomString = () => {
    return Math.random().toString(36);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState([]);
  const [inputKey, setInputKey] = useState(generateRandomString());
  const [form] = Form.useForm();
  const { errors, reset, handleSubmit, control } = useForm({});

  const onSubmit = (data) => {
    console.log(files);
    setIsSubmitting(true);

    let formData = new FormData();
    formData.append("solutionDescription", data.solutionDescription);
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].file);
      formData.append(`files`, files[i].file);
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    customProducts
      .addSolution(user.userId, product.customProductId, formData)
      .then((res) => {
        console.log(res);
        props.hideModal();
        props.toggleUpdate();
        setInputKey(generateRandomString());
        handleResponse(res, "Pomyślnie dodano rozwiązanie");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak przy dodawaniu rozwiązania");
      })
      .finally(() => setIsSubmitting(false));
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
      setInputKey(generateRandomString);
      console.log(files);
    }
  };
  return (
    <>
      <Modal
        title="Dodaj rozwiązanie"
        visible={visible}
        onOk={form.submit}
        onCancel={() => {
          props.hideModal();
          reset({});
          setFiles([]);
          setInputKey(Math.random().toString(36));
        }}
        confirmLoading={isSubmitting}
      >
        <Form {...layout} form={form} onFinish={handleSubmit(onSubmit)}>
          <Form.Item label="Opis rozwiązania">
            <Controller
              name="solutionDescription"
              control={control}
              as={<TextArea rows={5} />}
              defaultValue=""
              placeHolder="Podaj opis rozwiązania"
            />
            <div className="errorMessage">
              {errors.solutionDescription?.message}
            </div>
          </Form.Item>
          <Form.Item label="Pliki">
            <div style={{ marginInline: "50%" }}>
              <input
                id="f02"
                type="file"
                name="files"
                onChange={onChange}
                key={inputKey || ""}
              />
              <label for="f02">Dodaj plik</label>
            </div>
          </Form.Item>
          <div style={{ marginInline: "50%" }}>
            <Space direction="vertical">
              {files.length > 0
                ? [...files].map((file) => (
                    <FileItemButton
                      key={file.filePath}
                      file={file}
                      handleCancel={removeFile}
                    />
                  ))
                : ""}
            </Space>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddSolutionModal;
