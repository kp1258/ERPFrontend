import React, { useState, useEffect } from "react";
import { Space } from "antd";
import { CustomOrderItemInProductionCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsInProductionPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch } = useFetch({
    method: "get",
    url: "/custom-order-items/active?ProductionManager=3",
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
            {[...response].map((item) => (
              <CustomOrderItemInProductionCard
                key={item.customOrderItemId}
                item={item}
                toggleUpdate={toggleTrigger}
              />
            ))}
          </Space>
        ) : (
          <NoDataAlert content="Brak produktów na zamówienie będących w produkcji" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsInProductionPage;
