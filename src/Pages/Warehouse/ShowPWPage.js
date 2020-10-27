import React from "react";
import { ProductWarehouseCard } from "../../Components/Cards";
import { productWarehouse } from "../../Utils/Data";
import { Space } from "antd";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const ShowProductWarehousePage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/product-warehouse",
  });
  return (
    <div>
      {isLoading === false ? (
        <Space>
          {response.map((item) => (
            <ProductWarehouseCard
              key={item.productWarehouseItemId}
              item={item}
            />
          ))}
        </Space>
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ShowProductWarehousePage;
