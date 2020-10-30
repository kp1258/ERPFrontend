import React, { useState, useEffect } from "react";
import { Space } from "antd";
import { CustomProductOrderedCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsOrderedPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch } = useFetch({
    method: "get",
    url: "/custom-products/ordered",
  });
  useEffect(() => {
    console.log("useEfffect triggered");
  }, [triggerUpdate]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((customProduct) => (
              <CustomProductOrderedCard
                key={customProduct.customProductId}
                customProduct={customProduct}
                toggleUpdate={toggleTrigger}
              />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak produktów na zamówienie oczekujących na rozwiązanie" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsOrderedPage;
