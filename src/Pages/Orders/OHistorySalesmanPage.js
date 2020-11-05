import React, { useContext } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { Space } from "antd";
import { OrderHistoryCard } from "../../Components/Cards";
import { NoDataAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const OrdersHistorySalesmanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading } = useFetch({
    method: "get",
    url: `/orders/history?SalesmanId=${user.userId}`,
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
