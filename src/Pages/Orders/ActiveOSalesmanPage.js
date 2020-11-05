import React, { useContext } from "react";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";
import { Space } from "antd";
import { OrderActiveCard } from "../../Components/Cards";
import { UserContext } from "../../Contexts/UserContext";

const ActiveOrdersSalesmanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading } = useFetch({
    method: "get",
    url: `/orders/active?SalesmanId=${user.userId}`,
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
