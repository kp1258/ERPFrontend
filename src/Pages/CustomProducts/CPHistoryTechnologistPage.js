import React from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsHistoryTechnologistsPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/custom-products/prepared",
  });
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((customProduct) => (
              <CustomProductHistoryCard customProduct={customProduct} />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak produktów na zamówienie w historii" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsHistoryTechnologistsPage;
