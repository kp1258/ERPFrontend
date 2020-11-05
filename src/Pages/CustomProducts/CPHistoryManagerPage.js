import React from "react";
import { Space } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import { NoDataAlert } from "../../Components/Alerts";
const CustomProductsHistoryManagerPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/custom-order-items/history?ProductionManager=3",
  });
  return (
    <div>
      {isLoading === false ? (
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
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsHistoryManagerPage;
