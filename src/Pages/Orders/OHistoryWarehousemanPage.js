import React from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { OrderHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import { NoDataAlert } from "../../Components/Alerts";

const OrdersHistoryWarehousemanPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/orders/history?WarehousemanId=5",
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
          <NoDataAlert content="Brak zmówień w historii" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default OrdersHistoryWarehousemanPage;
