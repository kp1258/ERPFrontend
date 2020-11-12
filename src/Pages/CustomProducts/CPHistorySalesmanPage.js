import React, { useContext } from "react";
import { Row, Col } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";
import { pageRowGutter } from "../../Utils/layoutConstants";

const CustomProductsHistorySalesmanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/custom-order-items/orders-history?SalesmanId=${user.userId}`,
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((item) => (
                <Col>
                  <CustomOrderItemHistoryCard item={item} />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak produktów na zamówienie w historii zamównień" />
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

export default CustomProductsHistorySalesmanPage;
