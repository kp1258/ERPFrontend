import React from "react";
import { Space } from "antd";
import { StandardProductCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const StandardProductsPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/standard-products",
  });
  return (
    <div>
      {isLoading === false ? (
        <Space>
          {response.map((product) => {
            return (
              <StandardProductCard
                key={product.standardProductId}
                product={product}
              />
            );
          })}
        </Space>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default StandardProductsPage;
