import React, { useContext } from "react";
import { Space } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const CustomProductsWarehousemanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/custom-order-items/active-orders?WarehousemanId=${user.userId}`,
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Space>
              {[...response].map((item) => (
                <CustomOrderItemHistoryCard item={item} />
              ))}
            </Space>
          ) : (
            <NoDataAlert content="Brak produktów na zamówienie na aktywnych zamówieniach" />
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

export default CustomProductsWarehousemanPage;
