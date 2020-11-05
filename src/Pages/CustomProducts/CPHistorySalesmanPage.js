import React, { useContext } from "react";
import { Space } from "antd";
import { CustomOrderItemHistoryCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const CustomProductsHistorySalesmanPage = () => {
  const user = useContext(UserContext);
  const { response, isLoading } = useFetch({
    method: "get",
    url: `/custom-order-items/orders-history?SalesmanId=${user.userId}`,
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

export default CustomProductsHistorySalesmanPage;
