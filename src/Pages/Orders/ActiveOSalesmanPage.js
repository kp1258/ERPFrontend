import React from "react";
import { PageLoader } from "../../Components/Others";
import useFetch from "../../Api/useFetch";
import { NoDataAlert } from "../../Components/Alerts";

const ActiveOrdersSalesmanPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/orders/active?SalesmanId=2",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <div>Show active orders salesman page</div>
        ) : (
          <NoDataAlert content="Brak aktywnych zamówień" />
        )
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default ActiveOrdersSalesmanPage;
