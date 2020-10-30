import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { CreateCategoryForm } from "../../Components/Forms";
import {
  CategoryTableWithModal,
  ComponentLoader,
} from "../../Components/Others";
import useFetch from "../../Api/useFetch";
const StandardProductCategoriesPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch } = useFetch({
    method: "get",
    url: "/standard-products/categories",
  });
  useEffect(() => {
    console.log("use effect triggered");
  }, [triggerUpdate, response]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };
  return (
    <div>
      <Row>
        {isLoading === false ? (
          <Col flex={6}>
            <div style={{ margin: "40px" }}>
              <CategoryTableWithModal
                categories={[...response]}
                isLoading={isLoading}
                toggleUpdate={toggleTrigger}
              />
            </div>
          </Col>
        ) : (
          <ComponentLoader />
        )}
        <Col flex={6}>
          <div style={{ margin: "40px" }}>
            <CreateCategoryForm toggleUpdate={toggleTrigger} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StandardProductCategoriesPage;
