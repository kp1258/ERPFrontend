import React from "react";
import { Space } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";
const CustomProductsHistoryWarehousemanPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/custom-order-items/orders-history?WarehousemanId=5",
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
          <NoDataAlert content="Brak producktów na zamówienie w historii zamównień" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsHistoryWarehousemanPage;
