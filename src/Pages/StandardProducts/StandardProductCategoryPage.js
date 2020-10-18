import React, { useState } from "react";
import { Row, Col } from "antd";
import { CreateCategoryForm } from "../../Components/Forms";
import { EditCategoryModal } from "../../Components/Modals";

import { CategoryTable } from "../../Components/Tables";
const categoriesData = [
  {
    id: 1,
    name: "Nóż",
  },
  {
    id: 2,
    name: "Sito",
  },
];
const StandardProductCategoryPage = () => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({ id: 0, name: "" });
  const handleChooseCategory = (id) => {
    let categories = [...categoriesData];
    let chosenCategory = categories.find((category) => {
      return category.id === id;
    });
    setVisible(true);
    setCategory(chosenCategory);
  };
  const changeVisibility = () => {
    setVisible(false);
  };
  return (
    <div>
      <Row>
        <Col span={6}>
          <div class="d-flex justify-content-center">
            <CategoryTable
              data={categoriesData}
              handleClick={handleChooseCategory}
            />
          </div>
        </Col>
        <Col span={6}>
          <div class="d-flex justify-content-center">
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

export default StandardProductCategoryPage;
