import React from "react";
import { Space } from "antd";
import { MaterialWarehouseCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Utils/useFetch";

const ShowMaterialWarehousePage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/material-warehouse",
  });

  return (
    <div>
      {isLoading === false ? (
        <Space>
          {response.map((item) => (
            <MaterialWarehouseCard
              key={item.materialWarehouseItemId}
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

export default ShowMaterialWarehousePage;
