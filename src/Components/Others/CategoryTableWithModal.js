import React, { useState } from "react";
import ComponentLoader from "./ComponentLoader";
import { CategoryTable } from "../Tables";
import { EditCategoryModal } from "../Modals";
import useFetch from "../../Utils/useFetch";

const CategoryTableWithModal = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/standard-products/categories",
  });
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({
    standardProductCategoryId: 0,
    name: "",
  });
  const handleChooseCategory = (id) => {
    let categories = [...response];
    let chosenCategory = categories.find((category) => {
      return category.standardProductCategoryId === id;
    });
    setVisible(true);
    setCategory(chosenCategory);
    console.log(chosenCategory);
  };
  const changeVisibility = () => {
    setVisible(false);
  };
  return (
    <div>
      {isLoading === false ? (
        <>
          <CategoryTable data={response} handleClick={handleChooseCategory} />
          <EditCategoryModal
            visible={visible}
            category={category}
            hideModal={changeVisibility}
          />
        </>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
};

export default CategoryTableWithModal;
