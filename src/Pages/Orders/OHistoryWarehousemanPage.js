import React, { useContext } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { OrderHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const OrdersHistoryWarehousemanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/orders/history?WarehousemanId=${user.userId}`,
  });
  console.log(response);
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
            <NoDataAlert content="Brak zmówień w historii" />
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

export default OrdersHistoryWarehousemanPage;
