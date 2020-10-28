import React from "react";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const OrdersToRealizeWarehousemanPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/orders/placed",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <div>Orders to realize warehouseman page</div>
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
