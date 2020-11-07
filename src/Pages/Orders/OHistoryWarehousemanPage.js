import React, { useContext } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { OrderHistoryCard } from "../../Components/Cards";
import { Row, Col } from "antd";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import { pageRowGutter } from "../../Utils/layoutConstants";

const OrdersHistoryWarehousemanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/orders/history?WarehousemanId=${user.userId}`,
  });
  console.log(response);
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
            <NoDataAlert content="Brak zmówień w historii" />
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

export default OrdersHistoryWarehousemanPage;
