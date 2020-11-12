import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { layout } from "../../Utils/layoutConstants";
import { Form, Select, Input } from "antd";
import { standardProductSchema } from "../../Utils/yupSchemas";
import useFetch from "../../Api/useFetch";
import { ComponentLoader } from "../Loaders";
import { standardProducts } from "../../Api/erpApi";
import { NetworkErrorAlert } from "../Alerts";
import { handleResponse } from "../../Api/handleResponse";
import { Image } from "../Others";

const { Option } = Select;
const defaultImageSrc = "/assets/productIcon.png";
const EditStandardProductForm = (props) => {
  const { product, toggleSubmitting } = props;
  const imagePath =
    product.imagePath !== null ? product.imagePath : defaultImageSrc;
  const [imageSrc, setImageSrc] = useState(imagePath);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/standard-products/categories",
  });
  const { control, errors, handleSubmit, register, reset } = useForm({
    resolver: yupResolver(standardProductSchema),
    defaultValues: {
      name: product.name,
      dimensions: product.dimensions,
      standardProductCategoryId:
        product.standardProductCategory.standardProductCategoryId,
    },
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
  useEffect(() => {
    reset({
      name: product.name,
      dimensions: product.dimensions,
      standardProductCategoryId:
        product.standardProductCategory.standardProductCategoryId,
    });
  }, [product]);
  const onSubmit = (data) => {
    console.log(data);
    toggleSubmitting(true);
    let formData = new FormData();
    formData.set("name", data.name);
    formData.set("dimensions", data.dimensions);
    formData.set("standardProductCategoryId", data.standardProductCategoryId);
    if (data.image.length !== 0) {
      formData.set("imageName", data.image[0].name);
      formData.set("imageFile", data.image[0]);
    }
    standardProducts
      .update(product.standardProductId, formData)
      .then((res) => {
        console.log(res);
        props.hideModal();
        props.toggleUpdate();
        handleResponse(res, "Pomyślnie zmieniono dane produktu");
      })
      .catch((err) => {
        console.log(err);
        handleResponse(err, "Coś poszło nie tak");
      })
      .finally(() => toggleSubmitting(false));
  };
  return (
    <>
      {isLoading === false ? (
        error === "" ? (
          <div>
            <Image imageSrc={imageSrc} />
            <Form
              {...layout}
              form={props.form}
              onFinish={handleSubmit(onSubmit)}
            >
              <div
                style={{
                  marginLeft: "110px",
                  paddingTop: "20px",
                  paddingBottom: "30px",
                }}
              >
                <Form.Item>
                  <input
                    id="34"
                    type="file"
                    name="image"
                    ref={register}
                    onChange={showPreview}
                  />
                  <label for="34">Dodaj plik</label>
                </Form.Item>
              </div>
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
                    <Select placeholder="Wybierz kategorię">
                      {[...response].map((category) => (
                        <Option value={category.standardProductCategoryId}>
                          {category.name}
                        </Option>
                      ))}
                    </Select>
                  }
                  defaultValue={product.standardProductCategoryId}
                />
              </Form.Item>
              <div className="errorMessage">
                {errors.standardProductCategoryId?.message}
              </div>
            </Form>
          </div>
        ) : (
          <NetworkErrorAlert />
        )
      ) : (
        <ComponentLoader />
      )}
    </>
  );
};

export default EditStandardProductForm;
