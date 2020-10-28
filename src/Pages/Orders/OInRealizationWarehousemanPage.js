import React from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const OrdersInRealizationWarehousemanPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/warehousemen/5/orders",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <div>Orders in realization warehouseman page</div>
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
