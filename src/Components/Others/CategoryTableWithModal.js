import React, { useState } from "react";
import ComponentLoader from "./ComponentLoader";
import { CategoryTable } from "../Tables";
import { EditCategoryModal } from "../Modals";

const CategoryTableWithModal = (props) => {
  const { isLoading, categories } = props;
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({
    standardProductCategoryId: 0,
    name: "",
  });
  const handleChooseCategory = (id) => {
    let categoriesC = [...categories];
    let chosenCategory = categoriesC.find((category) => {
      return category.standardProductCategoryId === id;
    });
    setVisible(true);
    setCategory(chosenCategory);
    console.log(chosenCategory);
  };
  const hideModal = () => {
    setVisible(false);
  };
  return (
    <div>
      {isLoading === false ? (
        <>
          <CategoryTable
            data={[...categories]}
            handleClick={handleChooseCategory}
          />
          <EditCategoryModal
            visible={visible}
            category={category}
            hideModal={hideModal}
            toggleUpdate={props.toggleUpdate}
          />
        </>
      ) : (
        <ComponentLoader />
      )}
    </div>
  );
};

export default CategoryTableWithModal;
