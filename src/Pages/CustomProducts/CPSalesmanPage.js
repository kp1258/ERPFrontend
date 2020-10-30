import React from "react";
import { Space } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsSalesmanPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/custom-order-items/active-orders?SelesmanId=2",
  });
  console.log(response);
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
          <NoDataAlert content="Brak produktów na zamówienie na aktywnych zamówieniach" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsSalesmanPage;
