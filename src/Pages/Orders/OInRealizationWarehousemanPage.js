import React, { useEffect, useState } from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";
import { OrderInRealizationCard } from "../../Components/Cards";
import { Space } from "antd";

const OrdersInRealizationWarehousemanPage = () => {
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const { response, isLoading, refetch } = useFetch({
    method: "get",
    url: "/warehousemen/5/orders",
  });
  console.log(response);
  useEffect(() => {
    console.log("use Effect triggered");
  }, [triggerUpdate]);
  const toggleTrigger = () => {
    refetch({});
    setTriggerUpdate(!triggerUpdate);
  };
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <div>
            <Space>
              {[...response].map((order) => [
                <OrderInRealizationCard
                  key={order.orderId}
                  order={order}
                  toggleUpdate={toggleTrigger}
                />,
              ])}
            </Space>
          </div>
        ) : (
          <NoDataAlert content="Brak zamówień w realizacji" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default OrdersInRealizationWarehousemanPage;
