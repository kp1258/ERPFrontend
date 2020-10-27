import React from "react";
import { StandardProductMissingCard } from "../../Components/Cards";
import { managerMissingProducts } from "../../Utils/Data";
import { Space } from "antd";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const MissingStandardProductsPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/production-managers/3/standard-products",
  });
  return (
    <div>
      {isLoading === false ? (
        <Space>
          {response.map((product) => (
            <StandardProductMissingCard product={product} />
          ))}
        </Space>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default MissingStandardProductsPage;
