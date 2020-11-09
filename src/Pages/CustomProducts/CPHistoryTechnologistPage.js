import React from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { Row, Col } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

const CustomProductsHistoryTechnologistsPage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/custom-products/prepared",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((customProduct) => (
                <Col>
                  <CustomProductHistoryCard customProduct={customProduct} />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak produktów na zamówienie w historii" />
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

export default CustomProductsHistoryTechnologistsPage;
