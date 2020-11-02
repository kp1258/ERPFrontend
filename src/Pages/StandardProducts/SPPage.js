import React from "react";
import { Space } from "antd";
import { StandardProductCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const StandardProductsPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/standard-products",
  });
  return (
    <div>
      {isLoading === false ? (
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
        <PageLoader />
      )}
    </div>
  );
};

export default StandardProductsPage;
