import React, { useContext } from "react";
import { Space } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const CustomProductsWarehousemanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading } = useFetch({
    method: "get",
    url: `/custom-order-items/active-orders?WarehousemanId=${user.userId}`,
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

export default CustomProductsWarehousemanPage;
