import React from "react";
import { OrderHistoryCard } from "../../Components/Cards";
import { Row, Col } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

const OrdersHistoryAdminPage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/orders/history",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((order) => (
                <Col>
                  <OrderHistoryCard order={order} />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak zamówień w historii" />
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

export default OrdersHistoryAdminPage;
