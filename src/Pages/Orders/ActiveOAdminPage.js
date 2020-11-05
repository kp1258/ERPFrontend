import React from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { Space } from "antd";
import { OrderActiveCard } from "../../Components/Cards";
import { NoDataAlert } from "../../Components/Alerts";

const ActiveOrdersAdminPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/orders/active",
  });
  return (
    <div>
      {isLoading === false ? (
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
        <PageLoader />
      )}
    </div>
  );
};

export default ActiveOrdersAdminPage;
