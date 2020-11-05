import React from "react";
import { StandardProductMissingCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const MissingStandardProductsPage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/production-managers/3/standard-products",
  });
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((product) => (
              <StandardProductMissingCard product={product} />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="W magazynie nie brakuje produktów standardowych" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default MissingStandardProductsPage;
