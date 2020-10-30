import React, { useEffect, useState } from "react";
import { Space } from "antd";
import { CustomOrderItemOrderedCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsOrderedManagerPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch } = useFetch({
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
        response !== "" ? (
          <Space>
            {[...response].map((item) => (
              <CustomOrderItemOrderedCard
                key={item.customOrderItemId}
                item={item}
                toggleUpdate={toggleTrigger}
              />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak produktów na zamówienie oczekujących na produkcję" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsOrderedManagerPage;
