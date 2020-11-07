import React from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { Row, Col } from "antd";
import { OrderActiveCard } from "../../Components/Cards";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

const ActiveOrdersAdminPage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/orders/active",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((order) => (
                <Col>
                  <OrderActiveCard order={order} />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak aktywnych zamówień" />
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

export default ActiveOrdersAdminPage;
