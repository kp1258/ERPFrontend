import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, Form, Button, Input, Select } from "antd";
import { standardProductSchema } from "../../Utils/yupSchemas";
import useFetch from "../../Api/useFetch";
import { ComponentLoader } from "../../Components/Others";
import { layout } from "../../Utils/FormLayout";
import { standardProducts } from "../../Api/erpApi";

const { Option } = Select;
const defaultImageSrc = "/assets/productIcon.png";
const CreateStandardProductForm = () => {
  const [imageSrc, setImageSrc] = useState(defaultImageSrc);

  const { response, isLoading } = useFetch({
    method: "get",
    url: "/standard-products/categories",
  });
  const { control, handleSubmit, errors, register, reset } = useForm({
    resolver: yupResolver(standardProductSchema),
  });
  const showPreview = (e) => {
    if (e.target.files !== null) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setImageSrc(x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImageSrc(defaultImageSrc);
    }
  };
  const onSubmit = (data) => {
    let formData = new FormData();
    formData.set("name", data.name);
    formData.set("dimensions", data.dimensions);
    formData.set("standardProductCategoryId", data.standardProductCategoryId);
    formData.set("imageName", data.image[0].name);
    formData.set("imageFile", data.image[0]);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    standardProducts
      .create(formData)
      .then((res) => {
        console.log(res);
        reset({});
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {isLoading === false ? (
        <Card title="Formularz tworzenia produktu standardowego">
          <div
            style={{
              height: "256px",
              width: "256px",
              border: "1px solid gray",
              color: "gray",
              position: "flex",
            }}
            className="center"
          >
            <img
              style={{ maxHeight: "256px", maxWidth: "256px" }}
              alt="Brak zdjęcia"
              src={imageSrc}
            />
          </div>
          <Form onFinish={handleSubmit(onSubmit)} {...layout}>
            <Form.Item>
              <input
                id="f02"
                type="file"
                name="image"
                ref={register}
                onChange={showPreview}
              />
              <label for="f02">Dodaj plik</label>
            </Form.Item>
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

            <Button type="primary" htmlType="submit">
              Dodaj
            </Button>
          </Form>
        </Card>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
};

export default CreateStandardProductForm;
