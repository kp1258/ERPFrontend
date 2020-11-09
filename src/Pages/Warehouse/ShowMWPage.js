import React from "react";
import { Row, Col } from "antd";
import { MaterialWarehouseCard } from "../../Components/Cards";
import { PageLoader } from "../../Components/Loaders";
import useFetch from "../../Api/useFetch";
import { NetworkErrorAlert, NoDataAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

const ShowMaterialWarehousePage = () => {
  const { response, isLoading, error } = useFetch({
    method: "get",
    url: "/material-warehouse",
  });

  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((item) => (
                <Col>
                  <MaterialWarehouseCard
                    key={item.materialWarehouseItemId}
                    item={item}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak materiałów w magazynie" />
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

export default ShowMaterialWarehousePage;
