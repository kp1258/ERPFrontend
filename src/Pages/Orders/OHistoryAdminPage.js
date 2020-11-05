import React from "react";
import { OrderHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert } from "../../Components/Alerts";

const OrdersHistoryAdminPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/orders/history",
  });
  return (
    <div>
      {isLoading === false ? (
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
        <PageLoader />
      )}
    </div>
  );
};

export default OrdersHistoryAdminPage;
