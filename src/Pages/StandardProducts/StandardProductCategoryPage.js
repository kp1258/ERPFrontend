import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CreateCategoryForm, EditCategoryForm } from "../../Components/Forms";

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
      <Container>
        <Row>
          <Col>
            <div class="d-flex justify-content-center">
              <CategoryTable
                data={categoriesData}
                handleClick={handleChooseCategory}
              />
            </div>
          </Col>
          <Col>
            <div class="d-flex justify-content-center">
              <CreateCategoryForm />
            </div>
          </Col>
        </Row>
        <div></div>
        <Row>
          <Col>
            {category.id !== 0 && visible === true && (
              <EditCategoryForm
                category={category}
                changeVisibility={changeVisibility}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StandardProductCategoryPage;
