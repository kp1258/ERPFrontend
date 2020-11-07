import React from "react";
import { ProductWarehouseCard } from "../../Components/Cards";
import { Row, Col } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

const ShowProductWarehousePage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/product-warehouse",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((item) => (
                <Col>
                  <ProductWarehouseCard
                    key={item.productWarehouseItemId}
                    item={item}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak produktów w magazynie" />
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

export default ShowProductWarehousePage;
