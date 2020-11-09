import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { CustomOrderItemOrderedCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { pageRowGutter } from "../../Utils/layoutConstants";

const CustomProductsOrderedManagerPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: "/custom-order-items/prepared",
  });
  useEffect(() => {
    console.log("use Effect triggered");
  }, [triggerUpdate]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };

  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        error === "" ? (
          response !== "" ? (
            <Row gutter={[...pageRowGutter]}>
              {[...response].map((item) => (
                <Col>
                  <CustomOrderItemOrderedCard
                    key={item.customOrderItemId}
                    item={item}
                    toggleUpdate={toggleTrigger}
                  />
                </Col>
              ))}
            </Row>
          ) : (
            <NoDataAlert content="Brak produktów na zamówienie oczekujących na produkcję" />
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

export default CustomProductsOrderedManagerPage;
