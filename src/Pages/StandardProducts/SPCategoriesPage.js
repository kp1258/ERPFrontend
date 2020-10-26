import React, { useState } from "react";
import { Row, Col } from "antd";
import { CreateCategoryForm } from "../../Components/Forms";
import { EditCategoryModal } from "../../Components/Modals";

import { CategoryTable } from "../../Components/Tables";
import { categories as categoriesData } from "../../Utils/Data";

const StandardProductCategoriesPage = () => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({
    standardProductCategoryId: 0,
    name: "",
  });
  const handleChooseCategory = (id) => {
    let categories = [...categoriesData];
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
      <Row>
        <Col flex={6}>
          <div>
            <CategoryTable
              data={categoriesData}
              handleClick={handleChooseCategory}
            />
          </div>
        </Col>
        <Col flex={6}>
          <div>
            <CreateCategoryForm />
          </div>
        </Col>
      </Row>
      <EditCategoryModal
        visible={visible}
        category={category}
        hideModal={changeVisibility}
      />
    </div>
  );
};

export default StandardProductCategoriesPage;
