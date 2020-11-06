import React from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { Space } from "antd";
import { OrderActiveCard } from "../../Components/Cards";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

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
            <Space>
              {[...response].map((order) => (
                <OrderActiveCard order={order} />
              ))}
            </Space>
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
