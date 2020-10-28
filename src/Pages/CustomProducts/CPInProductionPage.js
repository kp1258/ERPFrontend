import React from "react";
import { Space } from "antd";
import { CustomOrderItemInProductionCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsInProductionPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/custom-order-items/active?ProductionManager=3",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((item) => (
              <CustomOrderItemInProductionCard item={item} />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak produktów na zamówienie będących w produkcji" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsInProductionPage;
