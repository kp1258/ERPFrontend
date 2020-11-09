import React, { useState, useEffect } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { OrderToRealizeCard } from "../../Components/Cards";
import { Row, Col } from "antd";
import { pageRowGutter } from "../../Utils/layoutConstants";

const OrdersToRealizeWarehousemanPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: "/orders/placed",
  });
  useEffect(() => {
    console.log("useEfffect triggered");
  }, [triggerUpdate]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <div>
              <Row gutter={[...pageRowGutter]}>
                {[...response].map((order) => (
                  <Col>
                    <OrderToRealizeCard
                      key={order.orderId}
                      order={order}
                      toggleUpdate={toggleTrigger}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          ) : (
            <NoDataAlert content="Brak zamówień do zrealizowania" />
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

export default OrdersToRealizeWarehousemanPage;
