import React from "react";
import { Space } from "antd";
import { CustomProductOrderedCard } from "../../Components/Cards";
import useFetch from "../../Api/useFetch";
import { PageLoader } from "../../Components/Others";
import { NoDataAlert } from "../../Components/Alerts";

const CustomProductsOrderedPage = () => {
  const { response, error, isLoading } = useFetch({
    method: "get",
    url: "/custom-products/ordered",
  });
  console.log(response);
  return (
    <div>
      {isLoading === false ? (
        response !== "" ? (
          <Space>
            {[...response].map((customProduct) => (
              <CustomProductOrderedCard customProduct={customProduct} />
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
