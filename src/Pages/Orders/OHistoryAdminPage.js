import React from "react";
import { OrderHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

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
            <Space>
              {[...response].map((order) => (
                <OrderHistoryCard order={order} />
              ))}
            </Space>
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
