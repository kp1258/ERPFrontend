import React, { useState, useEffect } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Loaders";
import { NoDataAlert } from "../../Components/Alerts";
import { OrderToRealizeCard } from "../../Components/Cards";
import { Space } from "antd";

const OrdersToRealizeWarehousemanPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch } = useFetch({
    method: "get",
    url: "/orders/placed",
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
          <div>
            <Space>
              {[...response].map((order) => (
                <OrderToRealizeCard
                  key={order.orderId}
                  order={order}
                  toggleUpdate={toggleTrigger}
                />
              ))}
            </Space>
          </div>
        ) : (
          <NoDataAlert content="Brak zamówień do zrealizowania" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default OrdersToRealizeWarehousemanPage;
