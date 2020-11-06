import React, { useState, useEffect, useContext } from "react";
import { Space } from "antd";
import { CustomOrderItemInProductionCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert, NetworkErrorAlert } from "../../Components/Alerts";
import { UserContext } from "../../Contexts/UserContext";

const CustomProductsInProductionPage = () => {
  const user = useContext(UserContext);
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch, error } = useFetch({
    method: "get",
    url: `/custom-order-items/active?ProductionManager=${user.userId}`,
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
        error === "" ? (
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
          <NetworkErrorAlert />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default CustomProductsInProductionPage;
