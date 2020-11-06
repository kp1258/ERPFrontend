import React from "react";
import { ProductWarehouseCard } from "../../Components/Cards";
import { Space } from "antd";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";

const ShowProductWarehousePage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/product-warehouse",
  });
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
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
          <NetworkErrorAlert />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ShowProductWarehousePage;
