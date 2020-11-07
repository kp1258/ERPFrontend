import React from "react";
import { Row, Col } from "antd";
import { StandardProductCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

const StandardProductsPage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/standard-products",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((product) => {
                return (
                  <Col>
                    <StandardProductCard
                      key={product.standardProductId}
                      product={product}
                    />
                  </Col>
                );
              })}
            </Row>
          ) : (
            <NoDataAlert content="Brak produtków standardowych" />
          )
        ) : (
          <NetworkErrorAlert />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default StandardProductsPage;
