import React from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { Space } from "antd";
import { OrderHistoryCard } from "../../Components/Cards";
import { NoDataAlert } from "../../Components/Alerts";

const OrdersHistorySalesmanPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/orders/history?SalesmanId=2",
  });
  console.log(response);
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

export default OrdersHistorySalesmanPage;
