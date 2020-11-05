import React, { useContext } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { OrderHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import { NoDataAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const OrdersHistoryWarehousemanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading } = useFetch({
    method: "get",
    url: `/orders/history?WarehousemanId=${user.userId}`,
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
