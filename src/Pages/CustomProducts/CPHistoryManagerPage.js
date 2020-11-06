import React, { useContext } from "react";
import { Space } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const CustomProductsHistoryManagerPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: `/custom-order-items/history?ProductionManager=${user.userId}`,
  });
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
            <NoDataAlert content="Brak produktów na zamówienie wyprodukowanych przez kierownika" />
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

export default CustomProductsHistoryManagerPage;
