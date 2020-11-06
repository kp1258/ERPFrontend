import React, { useContext } from "react";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { Space } from "antd";
import { OrderActiveCard } from "../../Components/Cards";
import { UserContext } from "../../Contexts/UserContext";

const ActiveOrdersSalesmanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/orders/active?SalesmanId=${user.userId}`,
  });
  console.log(response);
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

export default ActiveOrdersSalesmanPage;
