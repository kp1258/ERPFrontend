import React from "react";
import { Space } from "antd";
import { standardProducts } from "../../Utils/Data";
import { StandardProductAdminCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const StandardProductsManagerPage = () => {
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
              <StandardProductAdminCard
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

export default StandardProductsManagerPage;
