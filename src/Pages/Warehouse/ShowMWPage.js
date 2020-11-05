import React from "react";
import { Space } from "antd";
import { MaterialWarehouseCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const ShowMaterialWarehousePage = () => {
  const { response, isLoading } = useFetch({
    method: "get",
    url: "/material-warehouse",
  });

  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((item) => (
              <MaterialWarehouseCard
                key={item.materialWarehouseItemId}
                item={item}
              />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak materiałów w magazynie" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ShowMaterialWarehousePage;
