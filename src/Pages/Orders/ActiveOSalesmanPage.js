import React from "react";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";
import { Space } from "antd";
import { OrderActiveCard } from "../../Components/Cards";

const ActiveOrdersSalesmanPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/orders/active?SalesmanId=2",
  });
  console.log(response);
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

export default ActiveOrdersSalesmanPage;
