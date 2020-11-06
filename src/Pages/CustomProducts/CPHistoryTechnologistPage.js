import React from "react";
import { CustomProductHistoryCard } from "../../Components/Cards";
import { Space } from "antd";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const CustomProductsHistoryTechnologistsPage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/custom-products/prepared",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
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
          <NetworkErrorAlert />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsHistoryTechnologistsPage;
