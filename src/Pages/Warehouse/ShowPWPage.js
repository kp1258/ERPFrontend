import React from "react";
import { ProductWarehouseCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const ShowProductWarehousePage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/product-warehouse",
  });
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((item) => (
              <ProductWarehouseCard
                key={item.productWarehouseItemId}
                item={item}
              />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak produktów w magazynie" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ShowProductWarehousePage;
