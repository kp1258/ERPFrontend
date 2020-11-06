import React from "react";
import { Space } from "antd";
import { StandardProductCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const StandardProductsPage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/standard-products",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Space>
              {[...response].map((product) => {
                return (
                  <StandardProductCard
                    key={product.standardProductId}
                    product={product}
                  />
                );
              })}
            </Space>
          ) : (
            <NoDataAlert content="Brak produtków standardowych" />
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

export default StandardProductsPage;
