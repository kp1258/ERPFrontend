import React from "react";
import { Row, Col } from "antd";
import { CreateCategoryForm } from "../../Components/Forms";
import { CategoryTableWithModal } from "../../Components/Others";
const StandardProductCategoriesPage = () => {
  return (
    <div>
      <Row>
        <Col flex={6}>
          <div>
            <CategoryTableWithModal />
          </div>
        </Col>
        <Col flex={6}>
          <div>
            <CreateCategoryForm />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StandardProductCategoriesPage;
